import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = [
    {
      id: 1,
      name: " Tesla Model S",
      company: "Tesla",
      topSpeed: "200 mph",
      type: "Sports",
      price: "$89,990",
      rating: 4.8,
      image: "https://images.hindustantimes.com/auto/img/2023/04/08/600x338/Tesla_Model_S_1678375094091_1680954187989_1680954187989.jpeg",
      description: "A high-performance electric sedan with cutting-edge technology and exceptional range."
    },
    {
      id: 2,
      name: "Ford Mustang GT",
      company: "Ford",
      topSpeed: "155 mph",
      type: "Sports",
      price: "$41,495",
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL1D1vJ2WI7I7rPs5EwDdHWJzjtOfKq1-iA&s",
      description: "An iconic muscle car known for its powerful V8 engine and bold design."
    },
    {
      id: 3,
      name: "Porsche 911 Turbo S",
      company: "Porsche",
      topSpeed: "205 mph",
      type: "Sports",
      price: "$223,800",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKm-zSRIuQpf5JsME4tv3z0NYSlkLiSSU6A&s",
      description: "A luxury sports car offering breathtaking speed, sharp handling, and premium craftsmanship."
    },
    {
      id: 4,
      name: "Honda Civic Type R",
      company: "Honda",
      topSpeed: "169 mph",
      type: "Sports",
      price: "$43,795",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIZ-vU9i2THIbbhl-me7oa7khge42CczWOQ&s",
      description: "A high-performance hatchback with race-inspired engineering and modern styling."
    },
    {
      id: 5,
      name: "Range Rover Evoque",
      company: "Land Rover",
      topSpeed: "143 mph",
      type: "SUV",
      price: "$55,300",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5foowe6raQpWXmRA9bQlGrLqRXw2hrm7ffg&s",
      description: "A luxury compact SUV that blends sophisticated design with all-terrain capability."
    },
    {
      id: 6,
      name: "Toyota Corolla Cross",
      company: "Toyota",
      topSpeed: "112 mph",
      type: "SUV",
      price: "$27,125",
      rating: 4.3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFurKZLLazd1hVx87c4HA3C0vQBf4H2uW-8Q&s",
      description: "A reliable and fuel-efficient compact SUV perfect for everyday commuting and adventures."
    },
    {
      id: 7,
      name: "Bugatti Chiron Super Sport",
      company: "Bugatti",
      topSpeed: "273 mph",
      type: "Sports",
      price: "$3,825,000",
      rating: 5.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxwyx4xnIYfIj0A-JolLTb0xxMFRNcW0Dpg&s",
      description: "An ultra-high-performance hypercar with unmatched speed and exquisite craftsmanship."
    },
    {
      id: 8,
      name: "Ford F-150 Lightning",
      company: "Ford",
      topSpeed: "120 mph",
      type: "SUV",
      price: "$59,974",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6T-_mPAuw1hGCMoea_V0W14upqRwkRGDmfQ&s",
      description: "A revolutionary electric pickup truck with immense power, utility, and advanced features."
    },
    {
      id: 9,
      name: "Lamborghini Aventador SVJ",
      company: "Lamborghini",
      topSpeed: "217 mph",
      type: "Sports",
      price: "$517,770",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOCVprX02XuRaYqWgPnXIoj80SNglK422HQ&s",
      description: "A striking supercar that combines aggressive styling with blistering performance."
    },
    {
      id: 10,
      name: "Jeep Wrangler Rubicon",
      company: "Jeep",
      topSpeed: "99 mph",
      type: "SUV",
      price: "$44,295",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g2qE6-bkcpYxsGPM9-LICLKkonqygMAxMA&s",
      description: "A rugged SUV built for off-road enthusiasts, offering unmatched capability and versatility."
    },
    {
      id: 11,
      name: "Lykan hypersport",
      company: "Lykan",
      topSpeed: "163 mph",
      type: "Sports",
      price: "$89,990",
      rating: 4.8,
      image: "https://www.carbike360.ae/_next/image?url=https%3A%2F%2Fcarbike360-ae.s3.me-central-1.amazonaws.com%2FW_Motors_Lykan_Hypersport_d8357fa876.jpg&w=3840&q=75",
      description: "A futuristic sports with exceptional performance, advanced technology, and spacious interiors."
    },
    {
      id: 12,
      name: "Lamborghini Urus",
      company: "Lamborghini",
      topSpeed: "205 mph",
      type: "Sports",
      price: "$207,000",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVK2SmKFAV7Q5mjEh1RMQTRjHRHQ7T549j15DUVUB1xgT8uDaQi9Q74xjfhxhvyQBRUI&usqp=CAU",
      description: "A high-performance sports car delivering a perfect blend of luxury, precision, and speed."
    }
  ];
  getTotalCars(){
    return this.cars.length;
  }
  getTotalSports(){
    return this.cars.filter(car  =>car.type === 'Sports' ).length;
  }
  getTotalSUV(){
    return this.cars.filter(car  =>car.type === 'SUV' ).length;
  }

  carCountRadioButton: string ='All';
  searchText: string='';

  onFilterRadioButtonChanged(data: string){
    this.carCountRadioButton = data;
    // console.log(this.carCountRadioButton);
  }
  onsearchTextChanged(searchvalue: string){
    this.searchText = searchvalue;
    //console.log(this.searchText);
}
}
