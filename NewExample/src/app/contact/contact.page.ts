import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
post = {} as Post;

  constructor(private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {}
  async createPost(post: Post){
 if(this.formValidation()) {
 try{
 await this.firestore.collection("contact").add(post);
 } catch(e){
 this.showToast(e);
 }
 //redirect to home page
 this.navCtrl.navigateRoot("about");
 }
 }

 formValidation(){
 if(!this.post.name){
 this.showToast("Enter name");
 return false;
 }
 if(!this.post.email){
 this.showToast("Enter email");
 return false;
 }
 if(!this.post.enquiry){
 this.showToast("Enter enquiry");
 return false;
 }
 if(!this.post.enquiry){
 this.showToast("Enter enquiry");
 return false;
 }
 if(!this.post.message){
 this.showToast("Enter message");
 return false;
 }
 return true;
 }

 async submit(){
 let alert = await this.alertCtrl.create({
      header: 'Thanks for contact us!',
      message: 'We will response to you as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
  showToast (message:string){
 this.toastCtrl.create({
 message: message,
 duration: 3000
 })
 .then(toastData => toastData.present());
 }
 }
 
 
        


