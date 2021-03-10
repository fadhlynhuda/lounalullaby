import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Post } from '../models/post.mode';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.page.html',
  styleUrls: ['./latestnews.page.scss'],
})
export class LatestnewsPage implements OnInit {
post = {} as Post; 
posts: any;

// Upload Task 
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details  
  fileName:string;
  fileSize:number;

  //Status check 
  isUploading:boolean;
  isUploaded:boolean;

   private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore, private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();
  }

  uploadFile(event: FileList) {
    

    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }
this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    const path = `freakyStorage/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Freaky Image Upload Demo' };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }
  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  ngOnInit() {}
  async createPost(post: Post){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 try{
 await this.firestore.collection("news").add(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();
 //redirect to home page
 this.navCtrl.navigateRoot("home");
 }
 }

 formValidation(){
 if(!this.post.product){
 this.showToast("Insert product name");
 return false;
 }
 if(!this.post.name){
 this.showToast("Enter name");
 return false;
 }
 if(!this.post.number){
 this.showToast("Enter phone number");
 return false;
 }
 if(!this.post.message){
 this.showToast("Enter caption");
 return false;
 }
 
 return true;
 }
 showToast (message:string){
 this.toastCtrl.create({
 message: message,
 duration: 3000
 })
 .then(toastData => toastData.present());
 }

 ionViewWillEnter() {
 this.getPosts();
 }
 async getPosts(){
 //show loader
 let loader = await this.loadingCtrl.create({
 message: "Please wait..."
 });
 loader.present();
 try {
 this.firestore.collection("contact")
 .snapshotChanges()
 .subscribe(data => {
 this.posts = data.map(e => {
 return {
 id: e.payload.doc.id,
 name: e.payload.doc.data()["name"],
 email: e.payload.doc.data()["email"],
 date: e.payload.doc.data()["date"],
 message: e.payload.doc.data()["message"]
 };
 });
 loader.dismiss();
 });

 } catch(e){
 this.showToast(e);
 }
 }
 async deletePost(id: string){
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 await this.firestore.doc("contact/" + id).delete();
 //dismiss loader
 (await loader).dismiss();
 }




}
