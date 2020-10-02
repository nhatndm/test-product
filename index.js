const express = require('express');
const app = express();
const cors = require('cors');

// APPLY CORS
app.use(cors());

app.get('/metadata', async (req, res) => {
  const mockProductData = [
    {
      id: 1,
      title: 'Cleaning',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/2-icon_zhckrv.png',
    },
    {
      id: 2,
      title: 'Event Assistant',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607112/3-icon_ob4qwl.png',
    },
    {
      id: 3,
      title: 'Office',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/4-icon_jly3dk.png',
    },
    {
      id: 4,
      title: 'Coffee Delivery',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/6-icon_xri79w.png',
    },
    {
      id: 5,
      title: 'Food Delivery',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/7-icon_qae5i3.png',
    },
    {
      id: 6,
      title: 'Shopping',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/8-icon_l1n0gb.png',
    },
    {
      id: 7,
      title: 'Messanger',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607112/10-icon_akz1ch.png',
    },
    {
      id: 8,
      title: 'Biils Payment',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607112/12-icon_cdzvbp.png',
    },
    {
      id: 9,
      title: 'Dish Washing',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607112/23-icon_bok0ih.png',
    },
    {
      id: 10,
      title: 'Queuing Up',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607113/15-icon_dvcki1.png',
    },
    {
      id: 11,
      title: 'Pet Sitting',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607112/16-icon_uhtxma.png',
    },
    {
      id: 12,
      title: 'Flyeing',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607113/17-icon_sidknb.png',
    },
    {
      id: 13,
      title: 'Deep Clean',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607113/26-icon_tyon5z.png',
    },
    {
      id: 14,
      title: 'Massage',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607113/25-icon_m7mept.png',
    },
  ];

  const mockFeaturedProduct = [
    {
      id: 1,
      title: 'Cleaning',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/2-icon_zhckrv.png',
    },
    {
      id: 14,
      title: 'Massage',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607113/25-icon_m7mept.png',
    },
    {
      id: 6,
      title: 'Shopping',
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607111/8-icon_l1n0gb.png',
    },
  ];

  const mockNews = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607880/29_tc8sth.png',
      title: 'How to use the App',
      subTitle: 'Getting access to on-demand',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/nhatndm1193/image/upload/v1601607880/27_srhyqt.png',
      title: 'List your service on MyKuya',
      subTitle: 'Do you offer Manpower',
    },
  ];

  return res.status(200).send({
    products: mockProductData,
    featured_products: mockFeaturedProduct,
    news: mockNews,
  });
});

app.listen(3030, () => {
  console.log('Api Server is listening at port 3030');
});
