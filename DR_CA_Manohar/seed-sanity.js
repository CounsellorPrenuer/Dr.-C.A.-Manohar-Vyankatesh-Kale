const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: 'gm2buqg0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk47s3q9dwqqGtQu6qndDvy8xi8Q2yQ9JHYWV5R7qlgATHW1nELWIJMVvJf6XhOiMJzuWjgzOTxXr6VkSXZ4LkVO4Uv86VhBNdxfD0JBdLLWk2fYFCIHDVXUWdV3iZBTzrka6zkNme17u4SQKl3DAjnVLl0nz1Ha3d6QTdlgRli3jni1g1y3',
});

async function uploadImage(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return null;
  }
  console.log(`Uploading ${filePath}...`);
  try {
    const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
      filename: path.basename(filePath),
    });
    return asset._id;
  } catch (err) {
    console.error(`Failed to upload ${filePath}`, err);
    return null;
  }
}

async function seed() {
  console.log('Seeding data to Sanity...');
  
  try {
    const founderImageId = await uploadImage(path.join(__dirname, 'founder.jpg'));
    const mentoriaImages = [];
    for (let i = 1; i <= 6; i++) {
      const id = await uploadImage(path.join(__dirname, `Mentoria${i}.png`));
      mentoriaImages.push(id);
    }

    // Site Settings
    await client.create({
      _type: 'siteSettings',
      brandName: 'Dr. C.A. Manohar Career Guidance',
      email: 'manohar.kale2012@gmail.com',
      phone: '0091-020-9422323131',
      whatsapp: '9422323131',
      primaryCta: 'Book a Consultation',
      footerText: 'Empowering students and professionals to achieve their true potential through expert career guidance and counseling.',
    });

    // Contact Info
    await client.create({
      _type: 'contactInfo',
      email: 'manohar.kale2012@gmail.com',
      phone: '0091-020-9422323131',
      whatsapp: '9422323131',
      address: 'Pune, Maharashtra, India',
      linkedin: 'http://www.linkedin.com/in/dr-ca-manohar-kale-787b8a54',
      instagram: 'https://instagram.com/manoharv.4',
    });

    // Founder
    await client.create({
      _type: 'founder',
      name: 'Dr. C.A. Manohar Vyankatesh Kale',
      title: 'Professional Career Guidance Counsellor',
      bio: 'A Professional & Experienced Career Guidance Counsellor with varied Qualifications and Domestic/Abroad Working Experience.',
      experience: 'Over 20 years of experience in guiding students and professionals.',
      philosophy: 'Every individual has unique strengths. My goal is to help you discover and leverage them for a successful career path.',
      image: founderImageId ? { _type: 'image', asset: { _type: 'reference', _ref: founderImageId } } : undefined,
    });

    // Home Page
    await client.create({
      _type: 'homePage',
      heroHeading: 'Discover Your True Potential',
      heroDescription: 'Expert career guidance and counseling to help you make informed decisions about your education and professional future.',
      ctaText: 'Get Started Today',
      introTitle: 'Welcome to Mentoria',
      introText: 'We provide comprehensive career counseling services tailored to your unique needs and aspirations.',
    });

    // Packages
    const packages = [
      {
        name: 'Achieve Online',
        price: '5,999',
        targetAudience: '10-12 STUDENTS',
        features: ['Psychometric assessment', '1 career counselling session', 'Lifetime access to Knowledge Gateway', 'Pre-recorded webinars'],
        imageIndex: 0
      },
      {
        name: 'Achieve Plus+',
        price: '10,599',
        targetAudience: '10-12 STUDENTS',
        features: ['Psychometric assessment', '4 career counselling sessions', 'Lifetime access', 'Live webinars', 'Customised reports', 'Study abroad guidance', 'CV reviews'],
        imageIndex: 1
      },
      {
        name: 'Ascend Online',
        price: '6,499',
        targetAudience: 'COLLEGE GRADUATES',
        features: ['Psychometric assessment', '1 career counselling session', 'Lifetime access', 'Pre-recorded webinars'],
        imageIndex: 2
      },
      {
        name: 'Ascend Plus+',
        price: '10,599',
        targetAudience: 'COLLEGE GRADUATES',
        features: ['Psychometric assessment', '3 career counselling sessions', 'Lifetime access', 'Live webinars', 'Customised reports', 'Study abroad guidance', 'CV reviews'],
        imageIndex: 3
      },
      {
        name: 'Professional Connect',
        price: '8,499',
        targetAudience: 'WORKING PROFESSIONALS',
        features: ['Career transition assessment', '2 coaching sessions', 'Resume building', 'Interview preparation'],
        imageIndex: 4
      },
      {
        name: 'Executive Leadership',
        price: '15,999',
        targetAudience: 'SENIOR EXECUTIVES',
        features: ['Leadership profiling', '5 executive coaching sessions', 'Personal branding', 'Networking strategies'],
        imageIndex: 5
      }
    ];

    for (let i = 0; i < packages.length; i++) {
      const p = packages[i];
      const imgId = mentoriaImages[p.imageIndex];
      await client.create({
        _type: 'package',
        name: p.name,
        price: p.price,
        targetAudience: p.targetAudience,
        features: p.features,
        order: i,
        image: imgId ? { _type: 'image', asset: { _type: 'reference', _ref: imgId } } : undefined,
      });
    }

    // Services
    const services = ['Career Guidance', 'Workshops & Seminars', 'Admission Guidance'];
    for (let i = 0; i < services.length; i++) {
      await client.create({
        _type: 'service',
        title: services[i],
        description: `Professional ${services[i].toLowerCase()} tailored to your needs.`,
        order: i,
      });
    }

    console.log('Done seeding!');
  } catch (err) {
    console.error(err);
  }
}

seed();
