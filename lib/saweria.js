let qrcode = require('qrcode')
let cheerio = require('cheerio')
let moment = require('moment-timezone')
let fetch = require('node-fetch')

class Saweria {
   constructor(user_id) {
      this.user_id = user_id;
      this.baseUrl = 'https://saweria.co';
      this.apiUrl = 'https://backend.saweria.co';
   }

   async login(email, password) {
      try {
         const response = await fetch(`${this.apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email,
               password
            }),
         });

         const { data } = await response.json();

         if (!data || !data.id) {
            return {
               creator: 'Wudysoft',
               status: false,
               msg: 'Failed to login'
            };
         }

         return {
            creator: 'Wudysoft',
            status: true,
            data: {
               user_id: data.id
            }
         };
      } catch (error) {
         console.log(error);
         return {
            creator: 'Wudysoft',
            status: false,
            msg: error.message
         };
      }
   }

   async createPayment(amount, msg = 'Order') {
      try {
         if (!this.user_id) {
            return {
               creator: 'Wudysoft',
               status: false,
               msg: 'USER ID NOT FOUND'
            };
         }

         const response = await fetch(`${this.apiUrl}/donations/${this.user_id}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               agree: true,
               amount: Number(amount),
               customer_info: {
                  first_name: 'Payment Gateway',
                  email: 'gateway@nomisec07.tech',
                  phone: '',
               },
               message: msg,
               notUnderAge: true,
               payment_type: 'qris',
               vote: ''
            }),
         });

         const { data } = await response.json();

         if (!data || !data.id) {
            return {
               creator: 'Wudysoft',
               status: false,
               msg: 'Failed to create payment'
            };
         }

         const qr_string = data.qr_string;
         const qr_image = await qrcode.toDataURL(qr_string, {
            scale: 8
         });

         return {
            creator: 'Wudysoft',
            status: true,
            data: {
               ...data,
               expired_at: moment(data.created_at).add(10, 'minutes').format('DD/MM/YYYY HH:mm:ss'),
               receipt: `${this.baseUrl}/qris/${data.id}`,
               url: `${this.baseUrl}/qris/${data.id}`,
               qr_image: qr_image
            }
         };
      } catch (error) {
         console.log(error);
         return {
            creator: 'Wudysoft',
            status: false,
            msg: error.message
         };
      }
   }

   async checkPayment(id) {
      try {
         if (!this.user_id) {
            return {
               creator: 'Wudysoft',
               status: false,
               msg: 'USER ID NOT FOUND'
            };
         }

         const response = await fetch(`${this.baseUrl}/receipt/${id}`, {
            method: 'GET',
            headers: {
               "Accept": "*/*"
            },
         });

         const text = await response.text();
         const $ = cheerio.load(text);
         const msg = $('h2.chakra-heading.css-14dtuui').text();

         if (!msg) {
            return {
               creator: 'Wudysoft',
               status: false,
               msg: '❌ Transaction not found or not completed\n\nNote: Please check the transaction status by typing "check" again if you are sure you have completed the payment transaction.'
            };
         }

         const status = msg.toLowerCase() === 'berhasil';
         return {
            creator: 'Wudysoft',
            status,
            msg: msg.toUpperCase()
         };
      } catch (error) {
         console.log(error);
         return {
            creator: 'Wudysoft',
            status: false,
            msg: error.message
         };
      }
   }
}

module.exports = { Saweria };