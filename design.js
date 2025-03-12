// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  const practiceAreas = [
    { title: 'Corporate Law', icon: 'fa-building', description: 'Expert guidance in business law, mergers & acquisitions, and corporate governance.' },
    { title: 'Family Law', icon: 'fa-users', description: 'Compassionate representation in divorce, custody, and family matters.' },
    { title: 'Real Estate', icon: 'fa-home', description: 'Comprehensive legal services for property transactions and disputes.' },
    { title: 'Criminal Defense', icon: 'fa-gavel', description: 'Strong advocacy in criminal cases with proven track record.' },
    { title: 'Personal Injury', icon: 'fa-band-aid', description: 'Dedicated representation for accident victims and injury claims.' },
    { title: 'Intellectual Property', icon: 'fa-lightbulb', description: 'Protection for patents, trademarks, and creative works.' }
  ];

  const attorneys = [
    {
      name: 'Jonathan Richardson',
      role: 'Managing Partner',
      specialty: 'Corporate Law',
      image: 'https://public.readdy.ai/ai/img_res/57f6ea798c1133c32482e3d3a1978231.jpg'
    },
    {
      name: 'Elizabeth Blackwood',
      role: 'Senior Partner',
      specialty: 'Family Law',
      image: 'https://public.readdy.ai/ai/img_res/e2279cb9d5d97549d6c992c429db9ea6.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Partner',
      specialty: 'Intellectual Property',
      image: 'https://public.readdy.ai/ai/img_res/eae8108763d93cc01afd66d088e4bbbf.jpg'
    },
    {
      name: 'Sarah Thompson',
      role: 'Partner',
      specialty: 'Criminal Defense',
      image: 'https://public.readdy.ai/ai/img_res/5933f80d0687414ab86b5c8de3d8db6a.jpg'
    }
  ];

  const caseResults = [
    {
      title: 'Corporate Merger Success',
      outcome: '$50M deal completed',
      description: 'Successfully negotiated and closed a complex cross-border merger.',
      area: 'Corporate Law'
    },
    {
      title: 'IP Rights Protection',
      outcome: 'Patent upheld',
      description: 'Defended crucial technology patent against infringement claims.',
      area: 'Intellectual Property'
    },
    {
      title: 'Family Settlement',
      outcome: 'Amicable resolution',
      description: 'Mediated high-stakes divorce with substantial assets.',
      area: 'Family Law'
    }
  ];

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: {
          text: 'Case Success Rate',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Case Results',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 95, name: 'Successful' },
              { value: 5, name: 'Pending' }
            ]
          }
        ]
      };
      chart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-balance-scale text-blue-800 text-3xl"></i>
            <span className="text-2xl font-semibold text-blue-800">Richardson & Associates</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Practice Areas', 'Attorneys', 'About Us', 'Resources', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-800 cursor-pointer whitespace-nowrap">{item}</a>
            ))}
            <button className="bg-blue-800 text-white px-6 py-2 !rounded-button cursor-pointer whitespace-nowrap">
              Free Consultation
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 cursor-pointer whitespace-nowrap">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-20 relative bg-gradient-to-r from-blue-900 to-blue-800 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Excellence in Legal Representation</h1>
            <p className="text-xl mb-8">With over 25 years of experience, we provide exceptional legal services tailored to your needs.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-800 px-8 py-3 !rounded-button font-semibold cursor-pointer whitespace-nowrap">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 !rounded-button font-semibold cursor-pointer whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://public.readdy.ai/ai/img_res/e299ec4bcb4118877523a5b1ca697132.jpg"
              alt="Law Office"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Practice Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <i className={`fas ${area.icon} text-4xl text-blue-800 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <button className="text-blue-800 font-semibold cursor-pointer whitespace-nowrap">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Attorneys</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {attorneys.map((attorney) => (
              <div key={attorney.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={attorney.image} alt={attorney.name} className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{attorney.name}</h3>
                  <p className="text-gray-600 mb-2">{attorney.role}</p>
                  <p className="text-blue-800 mb-4">{attorney.specialty}</p>
                  <button className="bg-blue-800 text-white px-6 py-2 w-full !rounded-button cursor-pointer whitespace-nowrap">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div ref={chartRef} style={{ width: '100%', height: '300px' }}></div>
              <h3 className="text-xl font-semibold mt-4">Proven Track Record</h3>
              <p className="text-gray-600 mt-2">95% success rate in cases handled</p>
            </div>
            <div className="text-center">
              <i className="fas fa-award text-6xl text-blue-800 mb-6"></i>
              <h3 className="text-xl font-semibold">Award Winning</h3>
              <p className="text-gray-600 mt-2">Recognized by legal peers and industry leaders</p>
            </div>
            <div className="text-center">
              <i className="fas fa-clock text-6xl text-blue-800 mb-6"></i>
              <h3 className="text-xl font-semibold">25+ Years Experience</h3>
              <p className="text-gray-600 mt-2">Decades of successful legal representation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Case Results</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {caseResults.map((result, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <h3 className="text-xl font-semibold mb-4">{result.title}</h3>
                  <p className="text-blue-800 font-bold mb-4">{result.outcome}</p>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                    {result.area}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-800 focus:ring-blue-800"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-800 focus:ring-blue-800"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-800 focus:ring-blue-800"
                  ></textarea>
                </div>
                <button className="bg-blue-800 text-white px-8 py-3 w-full !rounded-button cursor-pointer whitespace-nowrap">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Office Location</h3>
                <p className="text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-800"></i>
                  123 Legal Avenue, New York, NY 10001
                </p>
                <p className="text-gray-600 mb-4">
                  <i className="fas fa-phone mr-2 text-blue-800"></i>
                  (555) 123-4567
                </p>
                <p className="text-gray-600 mb-4">
                  <i className="fas fa-envelope mr-2 text-blue-800"></i>
                  contact@richardson-associates.com
                </p>
                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: By Appointment</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Richardson & Associates</h4>
              <p className="text-gray-300">Excellence in legal services since 2000</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Practice Areas', 'Our Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white cursor-pointer">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated with our latest news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg text-gray-900 w-full"
                />
                <button className="bg-blue-800 px-6 py-2 rounded-r-lg cursor-pointer whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'].map((icon) => (
                  <a key={icon} href="#" className="text-2xl hover:text-blue-400 cursor-pointer">
                    <i className={`fab ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Richardson & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;










// DESIGN 2

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [showConsultModal, setShowConsultModal] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'Success Rate',
          data: [92, 94, 96, 97, 98],
          type: 'line',
          smooth: true
        }]
      };
      chart.setOption(option);
    }
  }, []);

  const practiceAreas = [
    { title: 'Corporate Law', icon: 'fa-building', desc: 'Expert guidance in business law, mergers & acquisitions, and corporate governance.' },
    { title: 'Intellectual Property', icon: 'fa-lightbulb', desc: 'Protection for patents, trademarks, and creative works.' },
    { title: 'Real Estate', icon: 'fa-home', desc: 'Comprehensive real estate transaction and dispute resolution services.' },
    { title: 'Family Law', icon: 'fa-users', desc: 'Sensitive handling of divorce, custody, and family matters.' },
    { title: 'Criminal Defense', icon: 'fa-gavel', desc: 'Strong defense strategies for criminal cases.' },
    { title: 'Tax Law', icon: 'fa-file-invoice-dollar', desc: 'Expert tax planning and dispute resolution.' }
  ];

  const attorneys = [
    {
      name: 'Jonathan Winchester III',
      role: 'Managing Partner',
      specialty: 'Corporate Law',
      image: 'https://public.readdy.ai/ai/img_res/7310acb8ac8d7ee13d55b5f93bfb6658.jpg'
    },
    {
      name: 'Elizabeth Blackwood',
      role: 'Senior Partner',
      specialty: 'Intellectual Property',
      image: 'https://public.readdy.ai/ai/img_res/2a9488139e10bc0dd55c5fd6737cc8ee.jpg'
    },
    {
      name: 'Michael Richardson',
      role: 'Partner',
      specialty: 'Real Estate',
      image: 'https://public.readdy.ai/ai/img_res/1a6e4f183e37a9febfbe1e12787ad17e.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-gray-800">Winchester & Associates</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Practice Areas', 'Attorneys', 'About', 'Resources', 'Contact'].map((item) => (
                <a key={item} className="text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap">{item}</a>
              ))}
            </nav>
            <button 
              onClick={() => setShowConsultModal(true)}
              className="bg-blue-700 text-white px-6 py-2 !rounded-button cursor-pointer hover:bg-blue-800 whitespace-nowrap"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative h-[600px] bg-cover bg-center" style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/de4248149d9880355f6f848d7f5858fe.jpg')`
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h2 className="text-5xl font-serif font-bold mb-6">Excellence in Legal Practice Since 1985</h2>
                <p className="text-xl mb-8">Dedicated to delivering exceptional legal services with integrity, expertise, and a commitment to client success.</p>
                <div className="flex space-x-4">
                  <button className="bg-blue-700 text-white px-8 py-3 !rounded-button cursor-pointer hover:bg-blue-800 whitespace-nowrap">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 !rounded-button cursor-pointer hover:bg-white/10 whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center font-bold mb-16">Our Practice Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <i className={`fas ${area.icon} text-4xl text-blue-700 mb-4`}></i>
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.desc}</p>
                <a className="text-blue-700 hover:text-blue-800 font-semibold cursor-pointer">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center font-bold mb-16">Our Expert Attorneys</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <div key={attorney.name} className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover object-top transition-transform group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{attorney.name}</h3>
                  <p className="text-gray-600">{attorney.role}</p>
                  <p className="text-blue-700">{attorney.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Rate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center font-bold mb-16">Our Success Rate</h2>
          <div ref={chartRef} style={{ height: '400px' }}></div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
                <div>
                  <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"></textarea>
                </div>
                <button className="bg-blue-700 text-white px-8 py-3 !rounded-button cursor-pointer hover:bg-blue-800 whitespace-nowrap">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Office Location</h3>
                <p className="text-gray-600 mb-4">1234 Legal Avenue</p>
                <p className="text-gray-600 mb-4">New York, NY 10001</p>
                <p className="text-gray-600 mb-4">Phone: (212) 555-0123</p>
                <p className="text-gray-600 mb-4">Email: contact@winchester-law.com</p>
                <div className="mt-8">
                  <h4 className="font-bold mb-2">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Winchester & Associates</h3>
              <p className="text-gray-400">Excellence in legal services since 1985.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Practice Areas', 'Our Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 hover:text-white cursor-pointer">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Practice Areas</h4>
              <ul className="space-y-2">
                {practiceAreas.slice(0, 4).map((area) => (
                  <li key={area.title}>
                    <a className="text-gray-400 hover:text-white cursor-pointer">{area.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for legal updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full text-gray-900" />
                <button className="bg-blue-700 px-4 py-2 rounded-r-lg hover:bg-blue-800 whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Winchester & Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {showConsultModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Schedule a Free Consultation</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="">Select Practice Area</option>
                {practiceAreas.map(area => (
                  <option key={area.title} value={area.title}>{area.title}</option>
                ))}
              </select>
              <textarea placeholder="Brief description of your case" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setShowConsultModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap"
                >
                  Cancel
                </button>
                <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 whitespace-nowrap">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

