import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product.model';

export interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor() {
    this.initializeCategories();
  }

  initializeCategories() {
    this.categories = [
      {
        name: 'Электроника',
        products: [
          {
            name: 'Apple iPhone 13 128GB Черный',
            description: 'Ощутите всю мощь Apple с iPhone 13 емкостью 128 ГБ в элегантном черном корпусе.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
            likes: 0
          },
          {
            name: 'Xiaomi Redmi 13C 8GB/256GB Черный',
            description: 'Доступная производительность благодаря Xiaomi Redmi 13C.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
            likes: 0
          },
          {
            name: 'Samsung Galaxy A55 5G 8GB/256GB тёмно-синий',
            description: 'Стильный и мощный Samsung Galaxy A55 5G.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
            likes: 0
          },
          {
            name: 'Realme Note 50 3GB/64GB Черный',
            description: 'Realme Note 50 идеально подходит для ежедневного использования.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
            likes: 0
          },
          {
            name: 'Google Pixel 9 12GB/128GB Черный',
            description: 'Google Pixel 9 с превосходной производительностью и камерой.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/hd7/86895780560926.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-128-gb-chernyi-122709568/?c=750000000',
            likes: 0
          }
        ]
      },
      {
        name: 'Бытовая техника',
        products: [
          {
            name: 'Электрочайник BEREKE BR-810 серый',
            description: 'Стильный, компактный, мощный, удобный, надёжный.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
            likes: 0
          },
          {
            name: 'Пылесос DREAME H13 Pro Plus Mix черный',
            description: 'Беспроводной, мощный, моющий, аккумуляторный, компактный.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pc0/pa5/8599373.jpeg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/oruell-dzh-1984-106313333/?c=750000000',
            likes: 0
          },
          {
            name: 'Стиральная машина LG F2J3NS0W белый',
            description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
            likes: 0
          },
          {
            name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
            description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000',
            likes: 0
          },
          {
            name: 'Кофейный автомат JETINNO JL24 черный',
            description: 'Автоматический, удобный, капсульный, стильный, многофункциональный.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h0c/hd1/85532169011230.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/jetinno-jl24-chernyi-117769395/?c=750000000',
            likes: 0
          }
        ]
      },
      {
        name: 'Компьютеры',
        products: [
          {
            name: 'Ноутбук Apple MacBook Air 13 2022 13.6"',
            description: 'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
            likes: 0
          },
          {
            name: 'SSD Kingston SA400S37/480G 480 Гб  ',
            description: 'SSD-накопитель Kingston A400 имеет достаточно большую емкость (480 ГБ).',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h50/hc5/87325424582686.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480g-480-gb-6800659/?c=750000000',
            likes: 0
          },
          {
            name: 'LINEUP i5-12400F/ RTX 4060/ 32GB/ SSD 1024 Гб/ Win 11 Pro',
            description: 'Мощный, игровой, производительный, современный, быстрый.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=750000000',
            likes: 0
          },
          {
            name: 'Операционная система Microsoft Windows 11 Professional 64-bit',
            description: 'Современная, профессиональная, безопасная, функциональная, удобная.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h98/h11/82848377405470.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/microsoft-windows-11-professional-64-bit-110955339/?c=750000000',
            likes: 0
          },
          {
            name: 'Мышь Logitech G102 Lightsync черный',
            description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
            likes: 0
          }
        ]
      },
      {
        name: 'Мебель',
        products: [
          {
            name: 'Матрас Ортопед без пружин',
            description: '160x200x22 см, чехол вискоза, жаккард',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hb1/hea/84870309380126.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/matras-ortoped-bez-pruzhin-160x200x22-sm-chehol-viskoza-zhakkard-115839796/?c=750000000',
            likes: 0
          },
          {
            name: 'Sofabed.kz диван угловой',
            description: 'Sofabed.kz диван угловой 648153, обивка велюр, 75х290х130 см, серый',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p03/p6a/5572203.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/sofabed-kz-divan-uglovoi-648153-obivka-veljur-75h290h130-sm-seryi-106832599/?c=750000000',
            likes: 0
          },
          {
            name: 'Стул C06',
            description: 'Стул C06, 80x46x40 см, белый',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
            likes: 0
          },
          {
            name: 'Манеж-кровать',
            description: 'Манеж-кровать, продольный маятниковый механизм от 0 до 3-х лет.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/ha7/h73/85720169054238.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/manezh-krovat-prodol-nyi-majatnikovyi-mehanizm-ot-0-do-3-h-let-118331778/?c=750000000',
            likes: 0
          },
          {
            name: 'Обувница Beautiful House',
            description: 'Обувница Beautiful House, 56x30x120 см, металлическая с пластиковыми встаками',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hf8/h27/83996999122974.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/obuvnitsa-beautiful-house-56x30x120-sm-metallicheskaja-s-plastikovymi-vstakami-113506854/?c=750000000',
            likes: 0
          }
        ]
      }
    ];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(product: Product) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p !== product);
    }
  }

  randomRating(): number {
    return parseFloat((2 + Math.random() * 3).toFixed(1));
  }
}
