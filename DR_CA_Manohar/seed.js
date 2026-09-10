const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'gm2buqg0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'sk39c2khb5jz5qDYM8LCLjsxaqpQkXfJyQDYrqkKOEAmRZspAQ90f9LF1uPrQQp36HMKdvKgnZlyafe0MoLBTA1rnc1wtdnYHErCPqtibRBPyX9xRyndYGIZgxvJDBweSvToO8fQ9ZFoHr83nzTut7QyDyNyKCOFZCAOt1f6mnGTYlPLCpiF',
});

async function seed() {
  console.log('Seeding data to Sanity...');
  
  try {
    // Packages
    await client.create({
      _type: 'package',
      name: 'Achieve Online',
      price: '5,999',
      targetAudience: '10-12 STUDENTS',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts'
      ]
    });
    
    await client.create({
      _type: 'package',
      name: 'Achieve Plus+',
      price: '10,599',
      targetAudience: '10-12 STUDENTS',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '4 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with education pathways',
        'Guidance on studying abroad',
        'CV reviews during internships/graduation'
      ]
    });

    await client.create({
      _type: 'package',
      name: 'Ascend Online',
      price: '6,499',
      targetAudience: 'COLLEGE GRADUATES',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '1 career counselling session',
        'Lifetime access to Knowledge Gateway',
        'Pre-recorded webinars by industry experts'
      ]
    });
    
    await client.create({
      _type: 'package',
      name: 'Ascend Plus+',
      price: '10,599',
      targetAudience: 'COLLEGE GRADUATES',
      features: [
        'Psychometric assessment to measure your interests, personality and abilities',
        '3 career counselling sessions',
        'Lifetime access to Knowledge Gateway',
        'Attend live webinars by industry experts',
        'Customised reports after each session with information on certificates/online courses',
        'Guidance on studying abroad',
        'CV reviews for job application'
      ]
    });

    // Site Settings
    await client.create({
      _type: 'siteSettings',
      brandName: 'Career Guidance Counselling & Allied Services under 1 Roofs',
      email: 'manohar.kale2012@gmail.com',
      phone: '0091-020-9422323131',
      linkedin: 'http://www.linkedin.com/in/dr-ca-manohar-kale-787b8a54',
      instagram: 'manoharv.4'
    });

    // Founder
    await client.create({
      _type: 'founder',
      name: 'Dr. C.A. Manohar Vyankatesh Kale',
      bio: 'A Professional & Experienced Career Guidance Counsellor with varied Qualifications and Domestic/Abroad Working Experience.'
    });

    // Services
    const services = [
      'Career Guidance',
      'Workshops & Seminars',
      'Admission Guidance'
    ];
    for (const s of services) {
      await client.create({
        _type: 'service',
        title: s,
        description: s
      });
    }

    console.log('Done seeding!');
  } catch (err) {
    console.error(err);
  }
}

seed();
