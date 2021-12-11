import React from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import { faHome, faShippingFast, faLock, faRedoAlt, faHeadset, faList, faTimes, faTags, faComments, faBlog, faSearch, faBook, faHeart, faShoppingCart, faUser, faEye, faStar, faStarHalfAlt, faMapMarkerAlt, faArrowRight, faPhone, faEnvelope, faBookOpen, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
//
import book_1 from '../assets/image/book-1.png'
import book_2 from '../assets/image/book-2.png'
import book_3 from '../assets/image/book-3.png'
import book_4 from '../assets/image/book-4.png'
import book_5 from '../assets/image/book-5.png'
import book_6 from '../assets/image/book-6.png'
import book_7 from '../assets/image/book-4.png'
import book_8 from '../assets/image/book-5.png'
import book_9 from '../assets/image/book-6.png'
import deal_img from '../assets/image/deal-img.jpg'
import stand from '../assets/image/stand.png'

import pic_1 from '../assets/image/pic-1.png'
import pic_2 from '../assets/image/pic-2.png'
import pic_3 from '../assets/image/pic-3.png'
import pic_4 from '../assets/image/pic-4.png'
import pic_5 from '../assets/image/pic-5.png'
import pic_6 from '../assets/image/pic-6.png'

import blog_1 from '../assets/image/blog-1.jpg'
import blog_2 from '../assets/image/blog-2.jpg'
import blog_3 from '../assets/image/blog-3.jpg'
import blog_4 from '../assets/image/blog-4.jpg'
import blog_5 from '../assets/image/blog-5.jpg'

import worldmap from '../assets/image/worldmap.png'

import styles from '../styles/Home.module.css'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const iconData = [
  {
    icon: faShippingFast,
    title: "free shipping",
    subtitle: "order over $100",
  },
  {
    icon: faLock,
    title: "secure payment",
    subtitle: "100% secure payment",
  },
  {
    icon: faRedoAlt,
    title: "easy returns",
    subtitle: "10 days returns",
  },
  {
    icon: faHeadset,
    title: "24/7 support",
    subtitle: "call us anytime",
  },
]

const featuredList = [
  { image: book_1 },
  { image: book_2 },
  { image: book_3 },
  { image: book_4 },
  { image: book_5 },
  { image: book_6 },
  { image: book_7 },
  { image: book_8 },
  { image: book_9 },
]
const reviewList = [
  { image: pic_1, name: 'Joly' },
  { image: pic_2, name: 'Koya' },
  { image: pic_3, name: 'Mr. MM' },
  { image: pic_4, name: 'Biba' },
  { image: pic_5, name: 'Mr. Tome' },
  { image: pic_6, name: 'Katy' },
]

const blogList = [
  { image: blog_1 },
  { image: blog_2 },
  { image: blog_3 },
  { image: blog_4 },
  { image: blog_5 },
]
// [1, 2, 3,......,9]

const Home: NextPage = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const [searchFormVisible, setSearchFormVisible] = React.useState<boolean>(false);
  const [loginFormVisible, setLoginFormVisible] = React.useState<boolean>(false);
  const toggleActive = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
      setActive(true);
    } else if (scrolled <= 80) {
      setActive(false);
    }
  };
  React.useEffect(() => {
    const subscribe = window.addEventListener('scroll', toggleActive);
    return () => subscribe;
  })
  const handleSearchFormVisible = () => setSearchFormVisible(!searchFormVisible);
  const handleLoginFormVisible = () => setLoginFormVisible(!loginFormVisible)
  return (
    <div className={styles.container}>
      {/* Header section */}
      <header className={styles.header}>
        <div className={styles.headerOne}>

          <a href="#" className={styles.logo}> <FontAwesomeIcon icon={faBook} /> bookly </a>

          <form action="" className={`${styles.searchForm} ${searchFormVisible ? styles.active : null}`}>
            <input type="search" name="" placeholder="search here..." id="search-box" />
            <label htmlFor="search-box"><FontAwesomeIcon icon={faSearch} /></label>
          </form>

          <div className={styles.icons}>
            <div id="search-btn" className={styles.searchBtn} onClick={() => handleSearchFormVisible()}><FontAwesomeIcon icon={faSearch} /></div>
            <a href="#heart"><FontAwesomeIcon icon={faHeart} /></a>
            <a href="#shoppingCart"><FontAwesomeIcon icon={faShoppingCart} /></a>
            <div id="login-btn" onClick={() => handleLoginFormVisible()}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

        </div>

        <div className={`${styles.headerTwo} ${active ? styles.active : null}`}>
          <nav className={styles.navbar}>
            <a href="#home">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </nav>
        </div>

      </header>
      {/* bottom navbar */}
      <nav className={styles.bottomNavbar}>
        <a href="#home"><FontAwesomeIcon icon={faHome} /></a>
        <a href="#featured" ><FontAwesomeIcon icon={faList} /></a>
        <a href="#arrivals" ><FontAwesomeIcon icon={faTags} /></a>
        <a href="#reviews"><FontAwesomeIcon icon={faComments} /></a>
        <a href="#blogs" ><FontAwesomeIcon icon={faBlog} /></a>
      </nav>


      {/* login form */}

      <div className={`${styles.loginFormContainer} ${loginFormVisible ? styles.active : null}`}>

        <div
          className={styles["close-login-btn"]}
          onClick={() => handleLoginFormVisible()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <form action="">
          <h3>sign in</h3>
          <span>username</span>
          <input type="email" name="" className={styles.box} placeholder="enter your email" id="" />
          <span>password</span>
          <input type="password" name="" className={styles.box} placeholder="enter your password" id="" />
          <div className={styles.checkbox}>
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me"> remember me</label>
          </div>
          <input type="submit" value="sign in" className={styles.btn} />
          <p>forget password ? <a href="#">click here</a></p>
          <p>don&apos;t have an account ? <a href="#">create one</a></p>
        </form>

      </div>
      {/* home section starts  */}

      <section className={styles.home} id="home">

        <div className={styles.row}>

          <div className={styles.content}>
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" className={styles.btn}>shop now</a>
          </div>
          <Swiper
            loop
            centeredSlides
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            breakpoints={{
              "0": {
                "slidesPerView": 1,
              },
              "768": {
                "slidesPerView": 2,
              },
              "1024": {
                "slidesPerView": 3,
              }
            }} className={`${styles['books-slider']}`}>
            <SwiperSlide>
              <a href="#">
                <Image height={180} width={150} src={book_1} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" >
                <Image height={180} width={150} src={book_2} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" >
                <Image height={180} width={150} src={book_3} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" >
                <Image height={180} width={150} src={book_4} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" >
                <Image height={180} width={150} src={book_5} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" >
                <Image height={180} width={150} src={book_6} alt="" /></a>
            </SwiperSlide>
            <Image src={stand} className={styles.stand} alt="" />
          </Swiper>
        </div>
      </section>

      {/* icons section starts */}
      <section className={styles["iconsContainer"]}>
        {
          iconData.map(({ icon, title, subtitle }) => (
            <div key={title} className={styles["icons"]}>
              <FontAwesomeIcon icon={icon} className={styles.fontIcon} />
              <div className={styles["content"]}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </div>
          ))
        }
      </section>

      {/* featured section starts */}
      <section className={styles.featured} id="featured">

        <h1 className={styles.heading}> <span>featured books</span> </h1>
        <Swiper
          spaceBetween={10}
          loop
          centeredSlides
          autoplay={{
            delay: 9500,
            disableOnInteraction: false
          }}
          navigation
          breakpoints={{
            "0": {
              "slidesPerView": 1,
            },
            "450": {
              "slidesPerView": 2,
            },
            "768": {
              "slidesPerView": 3,
            },
            "1024": {
              "slidesPerView": 4,
            }
          }} className={`${styles.featuredSlider}`}>
          {
            featuredList.map(({ image }, index) => (
              <SwiperSlide key={index} className={`${styles.box}`}>
                <div className={styles.icons}>
                  <a href="#"> <FontAwesomeIcon icon={faSearch} /></a>
                  <a href="#"> <FontAwesomeIcon icon={faHeart} /></a>
                  <a href="#"> <FontAwesomeIcon icon={faEye} /></a>
                </div>
                <div className={styles.image}>
                  <Image src={image} alt="" />
                </div>
                <div className={styles.content}>
                  <h3>featured books</h3>
                  <div className={styles.price}>$15.99 <span>$20.99</span></div>
                  <a href="#" className={styles.btn}>add to cart</a>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>

      {/* newsletter section starts */}

      <section className={styles.newsletter}>

        <form action="">
          <h3>subscribe for latest updates</h3>
          <input type="email" name="" placeholder="enter your email" id="" className={styles.box} />
          <input type="submit" value="subscribe" className={styles.btn} />
        </form>

      </section>
      {/* arrivals section starts */}
      <section className={styles.arrivals} id="arrivals">

        <h1 className={styles.heading}> <span>new arrivals</span> </h1>

        <Swiper
          spaceBetween={10}
          loop
          centeredSlides
          autoplay={{
            delay: 9500,
            disableOnInteraction: false
          }}
          navigation
          breakpoints={{
            "0": {
              "slidesPerView": 1,
            },
            "768": {
              "slidesPerView": 2,
            },
            "1024": {
              "slidesPerView": 3,
            }
          }} className={styles.arrivalsSlider}>
          {
            featuredList.map(({ image }, index) => (
              <SwiperSlide key={index} className={styles.box}>
                <div className={styles.image}>
                  <Image src={image} alt="" />
                </div>
                <div className={styles.content}>
                  <h3>new arrivals</h3>
                  <div className={styles.price}>$15.99 <span>$20.99</span></div>
                  <div className={styles.stars}>
                    <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                    <FontAwesomeIcon icon={faStarHalfAlt} className={styles.fontIcon} />
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      {/* deal section starts */}
      <section className={styles.deal}>

        <div className={styles.content}>
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.</p>
          <a href="#" className={styles.btn}>shop now</a>
        </div>

        <div className={styles.image}>
          <Image src={deal_img} alt="" />
        </div>

      </section>
      {/* reviews section starts */}
      <section className={styles.reviews} id="reviews">
        <h1 className={styles.heading}> <span>client's reviews</span> </h1>
        <Swiper
          spaceBetween={10}
          loop
          grabCursor
          autoplay={{
            delay: 9500,
            disableOnInteraction: false
          }}
          breakpoints={{
            "0": {
              "slidesPerView": 1,
            },
            "768": {
              "slidesPerView": 2,
            },
            "1024": {
              "slidesPerView": 3,
            }
          }} className={styles.reviewsSlider}>
          {
            reviewList.map(({ image, name }, index) => (
              <SwiperSlide key={index} className={styles.box}>
                <Image src={image} alt="" />
                <h3>{name}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className={styles.stars}>
                  <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.fontIcon} />
                  <FontAwesomeIcon icon={faStarHalfAlt} className={styles.fontIcon} />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>

      {/* blogs section starts */}

      <section className={styles.blogs} id="blogs">
        <h1 className={styles.heading}> <span>our blogs</span> </h1>
        <Swiper
          spaceBetween={10}
          loop
          grabCursor
          autoplay={{
            delay: 9500,
            disableOnInteraction: false
          }}
          breakpoints={{
            "0": {
              "slidesPerView": 1,
            },
            "768": {
              "slidesPerView": 2,
            },
            "1024": {
              "slidesPerView": 3,
            }
          }} className={styles.blogsSlider}>
          {
            blogList.map(({ image }, index) => (
              <SwiperSlide key={index} className={styles.box}>
                <div className={styles.image}>
                  <Image src={image} alt="" />
                </div>
                <div className={styles.content}>
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                  <a href="#" className={styles.btn}>read more</a>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>

      {/* footer section starts */}

      <section className={styles.footer}>

        <div className={styles.boxContainer}>

          <div className={styles.box}>
            <h3>our locations</h3>
            <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.fontIcon} /> india </a>
            <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.fontIcon} /> USA </a>
            <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.fontIcon} /> russia </a>
            <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.fontIcon} /> france </a>
            <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.fontIcon} /> japan </a>
            <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.fontIcon} /> africa </a>
          </div>

          <div className={styles.box}>
            <h3>quick links</h3>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> home </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> featured </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> arrivals </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> reviews </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> blogs </a>
          </div>

          <div className={styles.box}>
            <h3>extra links</h3>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> account info </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> ordered items </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> privacy policy </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> payment method </a>
            <a href="#"> <FontAwesomeIcon icon={faArrowRight} className={styles.fontIcon} /> our serivces </a>
          </div>

          <div className={styles.box}>
            <h3>contact info</h3>
            <a href="#"> <FontAwesomeIcon icon={faPhone} className={styles.fontIcon} /> +123-456-7890 </a>
            <a href="#"> <FontAwesomeIcon icon={faPhone} className={styles.fontIcon} /> +111-222-3333 </a>
            <a href="#"> <FontAwesomeIcon icon={faEnvelope} className={styles.fontIcon} /> shaikhanas@gmail.com </a>
            <Image src={worldmap} className={styles.map} alt="" />
          </div>

        </div>

        <div className={styles.share}>
          <a href="#"><FontAwesomeIcon icon={faBookOpen} className={styles.fontIcon} /></a>
          <a href="#"><FontAwesomeIcon icon={faWater} className={styles.fontIcon} /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className={styles.fontIcon} /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className={styles.fontIcon} /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className={styles.fontIcon} /></a>
        </div>

        <div className={styles.credit}> created by <span>mr. jahir</span> | all rights reserved! </div>

      </section>

    </div>
  )
}

export default Home


// TODO deploy in vercel
{/* https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app */ }