import Bedroom1 from "../../public/bedroom-1.jpg";
import Bedroom2 from "../../public/bedroom-2.jpg";
import Livingroom1 from "../../public/livingroom-1.jpg";
import Livingroom2 from "../../public/livingroom-2.jpg";

export const MENUS = [
  { href: "#rooms", text: "Rooms", locale: "nav.rooms" },
  { href: "#promotions", text: "Promotions", locale: "nav.promotions" },
  { href: "#testimonials", text: "Testimonials", locale: "nav.reviews" },
  { href: "#contact", text: "Contact", locale: "nav.contact" },
  // { href: "#bookNow", text: "Book Now", locale: "nav.bookNow" },
];

export const ROOMS = [
  {
    id: 1,
    title: "Living Room",
    description: {
      en: "A cozy room with a comfortable bed and modern amenities.",
      vi: "Một căn phòng ấm cúng với giường thoải mái và tiện nghi hiện đại.",
    },
    image: Livingroom1.src,
  },
  {
    id: 2,
    title: "Bed Room",
    description: {
      en: "Spacious room with a king-size bed, seating area, and premium facilities.",
      vi: "Phòng rộng rãi với giường cỡ king, khu vực tiếp khách và tiện nghi cao cấp.",
    },
    image: Bedroom1.src,
  },
  {
    id: 3,
    title: "Living Room",
    description: {
      en: "A cozy room with a comfortable bed and modern amenities.",
      vi: "Một căn phòng ấm cúng với giường thoải mái và tiện nghi hiện đại.",
    },
    image: Livingroom2.src,
  },
  {
    id: 4,
    title: "Delux Room",
    description: {
      en: "Spacious room with a king-size bed, seating area, and premium facilities.",
      vi: "Phòng rộng rãi với giường cỡ king, khu vực tiếp khách và tiện nghi cao cấp.",
    },
    image: Bedroom2.src,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely stunning hotel! The service was impeccable and the views were breathtaking. Will definitely be returning.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The luxury suite exceeded all expectations. The attention to detail and personalized service made our anniversary unforgettable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "From the moment we arrived, we felt like royalty. The spa services and dining options were world-class.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export const FAQS = [
  {
    id: 1,
    question: {
      en: "What time is check-in and check-out?",
      vi: "Thời gian nhận phòng và trả phòng là mấy giờ?",
    },
    answer: {
      en: "Check-in time is from 2:00 PM and check-out time is until 12:00 PM. Early check-in or late check-out may be available upon request.",
      vi: "Giờ nhận phòng từ 14:00 và trả phòng trước 12:00. Nhận phòng sớm hoặc trả phòng muộn có thể được sắp xếp theo yêu cầu.",
    },
  },
  {
    id: 2,
    question: {
      en: "Do you offer airport pickup service?",
      vi: "Bạn có dịch vụ đón sân bay không?",
    },
    answer: {
      en: "Yes, we provide airport pickup and drop-off services. Please contact us at least 24 hours in advance to arrange transportation.",
      vi: "Có, chúng tôi cung cấp dịch vụ đón và đưa sân bay. Vui lòng liên hệ trước ít nhất 24 giờ để sắp xếp phương tiện.",
    },
  },
  {
    id: 3,
    question: {
      en: "Is there free WiFi available?",
      vi: "Có WiFi miễn phí không?",
    },
    answer: {
      en: "Yes, complimentary high-speed WiFi is available throughout the property, including all guest rooms and common areas.",
      vi: "Có, WiFi tốc độ cao miễn phí có sẵn trong toàn bộ khuôn viên, bao gồm tất cả các phòng khách và khu vực chung.",
    },
  },
  {
    id: 4,
    question: {
      en: "What is your cancellation policy?",
      vi: "Chính sách hủy phòng như thế nào?",
    },
    answer: {
      en: "Free cancellation is available up to 48 hours before check-in. Cancellations made within 48 hours may be subject to a one-night charge.",
      vi: "Hủy miễn phí có thể thực hiện trước 48 giờ nhận phòng. Hủy trong vòng 48 giờ có thể bị tính phí một đêm.",
    },
  },
];

export const LOCALE = {
  en: {
    // Header
    "nav.rooms": "Rooms",
    "nav.amenities": "Amenities",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",
    "nav.promotions": "Promotions",

    // Hero
    "hero.title": "Luxury Awaits",
    "hero.subtitle":
      "Experience unparalleled comfort and elegance in the heart of the city",
    "hero.exploreRooms": "Explore Rooms",
    "hero.hideBooking": "Hide Booking",

    // Booking Form
    "booking.title": "Book Your Stay",
    "booking.checkIn": "Check-in",
    "booking.checkOut": "Check-out",
    "booking.guests": "Guests",
    "booking.roomType": "Room Type",
    "booking.checkAvailability": "Check Availability",
    "booking.guest": "Guest",
    "booking.guests.multiple": "Guests",
    "booking.roomTypes.standard": "Standard",
    "booking.roomTypes.deluxe": "Deluxe",
    "booking.roomTypes.suite": "Suite",
    "booking.phoneNumber": "Phone Number (*)",

    // Promotions
    "promotions.title": "Exclusive Offers",
    "promotions.subtitle":
      "Take advantage of our limited-time promotions and experience luxury for less",
    "promotions.cta": "Limited time offers - Book now to secure your discount!",
    "promotions.bookNow": "Book Now",

    // Testimonials
    "testimonials.title": "What Our Guests Say",
    "testimonials.subtitle": "Discover the wonderful experiences of our guests",

    // Services
    "services.title": "Our Services",
    "services.parking": "Parking",
    "services.roomService": "Room Service",
    "services.petFriendly": "Pet-Friendly",
    "services.laundry": "Laundry Service",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "We'd love to hear from you!",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",

    // FAQ
    "faq.title": "Frequently Asked Questions",
  },
  vi: {
    // Header
    "nav.rooms": "Phòng",
    "nav.amenities": "Tiện ích",
    "nav.reviews": "Đánh giá",
    "nav.contact": "Liên hệ",
    "nav.bookNow": "Đặt phòng",
    "nav.promotions": "Khuyến mãi",

    // Hero
    "hero.title": "Sự Sang Trọng Đang Chờ",
    "hero.subtitle":
      "Trải nghiệm sự thoải mái và thanh lịch vô song ngay trung tâm thành phố",
    "hero.exploreRooms": "Khám phá phòng",
    "hero.hideBooking": "Ẩn đặt phòng",

    // Booking Form
    "booking.title": "Đặt phòng của bạn",
    "booking.checkIn": "Ngày nhận phòng",
    "booking.checkOut": "Ngày trả phòng",
    "booking.guests": "Khách",
    "booking.roomType": "Loại phòng",
    "booking.checkAvailability": "Kiểm tra tình trạng",
    "booking.guest": "Khách",
    "booking.guests.multiple": "Khách",
    "booking.roomTypes.standard": "Tiêu chuẩn",
    "booking.roomTypes.deluxe": "Cao cấp",
    "booking.roomTypes.suite": "Phòng suite",
    "booking.phoneNumber": "Số điện thoại (*)",

    // Promotions
    "promotions.title": "Ưu đãi đặc biệt",
    "promotions.subtitle":
      "Tận hưởng các chương trình khuyến mãi giới hạn thời gian và trải nghiệm sự sang trọng với mức giá ưu đãi",
    "promotions.cta": "Ưu đãi có hạn - Đặt ngay để đảm bảo giảm giá của bạn!",
    "promotions.bookNow": "Đặt ngay",

    // Testimonials
    "testimonials.title": "Khách hàng nói gì",
    "testimonials.subtitle":
      "Khám phá những trải nghiệm tuyệt vời từ khách hàng của chúng tôi",

    // Services
    "services.title": "Dịch vụ của chúng tôi",
    "services.parking": "Bãi đậu xe",
    "services.roomService": "Dịch vụ phòng",
    "services.laundry": "Dịch vụ giặt ủi",
    "services.petFriendly": "Thân thiện với thú cưng",

    // Contact
    "contact.title": "Liên hệ",
    "contact.subtitle": "Chúng tôi rất mong nhận được phản hồi từ bạn!",
    "contact.phone": "Điện thoại",
    "contact.email": "Email",
    "contact.address": "Địa chỉ",

    // FAQ
    "faq.title": "Câu Hỏi Thường Gặp",
  },
};
