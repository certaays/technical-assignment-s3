1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi *Skiljek* dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
- **Full Name**
- **Email**
- **Phone Number**

#### **One to One**

```
{
    "_id" : "ObjectId('AAA')",
    "fullname" : "Jessica",
    "email" : "jess@ymail.com",
    "phoneNumber" : "081239019273"
}
```

2. Buatlah skema untuk kebutuhan data alamat pengguna *SkilShop* dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
- **Full Name**
- **Phone Number**
- **Address (Max 2)**

#### **One to Few**

```
{
    "_id" : "ObjectId("AAA")",
    "fullname" : "Jessica",
    "phoneNumber" : "0812345265",
    "addresses" : 
    [
        {
            "address" : "Jl. Mawar"
            "postCode" : "59999"
        },
        {
            "address" : "Jl. Kaswari"
            "postCode" : "58999"
        }
    ]
}
```


3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi *SkilShop*. Jelasskan juga relasi apakah yang tepat untuk data tersebut?

#### **One to Many**

**Product :** 
```
{
    "_id" : "ObjectId('AAA')",
    "productName" : "Kaos Polos",
    "brandName" : "SkilShirt",
    "variants" : ["ObjectId('AAA1')", "ObjectId('AAA2')"]
}
```

**Variants :** 
```
{
    "_id" : "ObjectId('AAA1')",
    "variantName" : "Kaos Polos Hitam"
    "color" : "Hitam",
    "quantity" : "12",
    "price" : "99000"
},
{
    "_id" : "ObjectId('AAA2')",
    "variantName" : "Kaos Polos Navy"
    "color" : "Navy",
    "quantity" : "10",
    "price" : "99000"
}
```

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama *SkilFlix*. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?

#### **Many to Many**

**Films :** 
```
{
    "_id" : ObjectId('AAA1'),
    "filmName" : "Venom 2",
    "cinema" : 
    [
        ObjectId('NNN1'),
        ObjectId('NNN2')
    ]
},
{
    "_id" : ObjectId('AAA2'),
    "filmName" : "Spiderman No Way Home",
    "cinema" : 
    [
        ObjectId('NNN1'),
        ObjectId('NNN2')
    ]
}
```

**Cinema :**
```
{
    "_id" : ObjectId('NNN1'),
    "cinemaName" : "CGF",
    "films" : 
    [
        ObjectId('AAA1'), 
        ObjectId('AAA2')
    ],
    "Location" : "Pondok Indah Mall"
},
{
    "_id" : ObjectId('NNN2'),
    "cinemaName" : "Cinema31",
    "films" : 
    [
        ObjectId('AAA1'), 
        ObjectId('AAA2')
    ],
    "Location" : "Mall Kelapa Gading"
}
```