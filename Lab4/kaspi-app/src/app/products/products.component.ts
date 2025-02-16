import { Component } from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';

interface Product {
  images: string[];
  name: string;
  description: string;
  rating: number;
  kaspiLink: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [
    NgClass,
    NgForOf,  
    NgOptimizedImage
  ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h94/h8a/87295492489246.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h93/hf3/87295492522014.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf7/87295492554782.png?format=gallery-medium'],
      name: 'Смартфон Apple iPhone 16 Pro Max 1Tb золотистый',
      description: 'Флагманский смартфон с чипом A18 Pro и дисплеем с частотой 120 Гц',
      rating: 4.7,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-zolotistyi-123890646/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h6b/h71/87295490129950.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he0/h84/87295490162718.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hb7/87295490195486.png?format=gallery-medium'],
      name: 'Смартфон Apple iPhone 16 Pro Max 1Tb черный',
      description: 'Флагманский смартфон с чипом A18 Pro и 50-мегапиксельной камерой',
      rating: 4.6,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-chernyi-123890381/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h60/h7d/87295491309598.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h67/87295491342366.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h37/ha3/87295491375134.png?format=gallery-medium'],
      name: 'Смартфон Apple iPhone 16 Pro Max 1Tb белый',
      description: 'Флагманский смартфон с чипом A18 Pro',
      rating: 5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-belyi-123890508/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h52/hf0/87295493668894.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hae/ha6/87295493701662.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h64/87295493734430.png?format=gallery-medium'],
      name: 'Смартфон Apple iPhone 16 Pro Max 1Tb серебристый',
      description: 'Компактный флагман с расширенными возможностями',
      rating: 5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-serebristyi-123890836/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/hba/87295484231710.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h30/h84/87295484264478.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h86/87295484297246.png?format=gallery-medium'],
      name: 'Смартфон Apple iPhone 16 Pro 1Tb черный',
      description: 'Новейшая модель с процессором Tensor G4',
      rating: 4.9,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-1tb-chernyi-123888437/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pe4/p58/20117879.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p78/p56/20117880.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p5c/p56/20117881.png?format=gallery-medium'],
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/1024 ГБ голубой',
      description: 'Смартфон премиум-класса с чипом Snapdragon 8 поколения 4 и 200-мегапиксельной камерой',
      rating: 5,
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-goluboi-133434642/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p70/p13/20117981.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p13/20117982.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p13/20117983.png?format=gallery-medium'],
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/1024 ГБ зеленый',
      description: 'Смартфон премиум-класса с чипом Snapdragon 8 поколения 4 и 200-мегапиксельной камерой',
      rating: 4.8,
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-zelenyi-133434687/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc4/pcf/20117666.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe0/pcf/20117667.png?format=gallery-medium'],
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/1024 ГБ темно-черный',
      description: 'Смартфон премиум-класса с чипом Snapdragon 8 поколения 4 и 200-мегапиксельной камерой',
      rating: 4.6,
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-temno-chernyi-133434619/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd8/pc8/20118459.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p44/pcb/20118460.png?format=gallery-medium'],
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/1024 ГБ серый',
      description: 'Ультрапремиальный фаблет с 6,9-дюймовым дисплеем',
      rating: 4.9,
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-seryi-133434808/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium'],
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/1024 ГБ черный',
      description: 'Чемпион среднего класса с системой камер флагманского уровня',
      rating: 5,
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-chernyi-133435350/?c=750000000'
    }
  ];

  shareViaWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=Check this Google Pixel: ${encodeURIComponent(link)}`, '_blank');
  }

  shareViaTelegram(link: string) {
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }

  getStars(rating: number) {
    return Array(5).fill(0).map((_, i) => i < rating);
  }
}
