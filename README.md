# 🚗 CarRental - Landing Page Rental Mobil

Landing page modern dan responsif untuk layanan rental mobil yang dibangun dengan React.js dan teknologi terdepan.

## ✨ Fitur Utama

- **Desain Modern & Responsif** - Interface yang bersih dan mobile-friendly
- **Animasi Smooth** - Menggunakan Framer Motion untuk pengalaman user yang menarik
- **Modular SASS** - Styling terorganisir dengan SASS untuk maintainability yang baik
- **Single Page Application** - Navigasi cepat dengan React Router DOM
- **Form Validation** - Validasi form yang robust menggunakan React Hook Form
- **Interactive Carousel** - Slider testimoni dengan Swiper.js
- **Custom Hooks** - Data management yang terstruktur

## 🎨 Design System

### Warna

- **Primary**: #004aad (Biru Professional)
- **Secondary**: #ff8c42 (Orange Energik)

### Typography

- **Font**: Poppins (Google Fonts)
- **Sizes**: Responsive typography scale

## 📱 Halaman

### 1. Home Page (5 Section)

- **Hero Section** - Background gradient dengan CTA yang kuat
- **Keunggulan** - 3 card highlight fitur utama
- **Mobil Unggulan** - Showcase 3 mobil terbaik dari data JSON
- **Cara Kerja** - 3 langkah proses rental yang mudah
- **Testimoni** - Slider review pelanggan dengan Swiper

### 2. Cars Page

- Grid responsive semua mobil dari JSON
- Filter berdasarkan tipe mobil
- Search functionality
- Detail lengkap setiap mobil

### 3. Contact Page

- Form pemesanan dengan validasi lengkap
- Informasi kontak dan jam operasional
- UI/UX yang user-friendly

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool dan dev server
- **Framer Motion** - Library animasi
- **SASS** - CSS preprocessor dengan modular architecture
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form management dan validasi
- **Swiper.js** - Carousel/slider component

## 📁 Struktur Folder

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   ├── HeroSection.jsx # Landing hero area
│   ├── FeatureSection.jsx # Benefits section
│   ├── CarsPreview.jsx # Featured cars
│   ├── HowItWorks.jsx  # Process explanation
│   ├── Testimonials.jsx # Customer reviews
│   ├── Footer.jsx      # Site footer
│   └── *.scss          # Component-specific styles
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Cars.jsx        # Cars listing page
│   ├── Contact.jsx     # Contact form page
│   └── *.scss          # Page-specific styles
├── hooks/              # Custom React hooks
│   └── useCars.js      # Cars data management
├── styles/             # Global styles
│   ├── _variables.scss # SASS variables
│   └── global.scss     # Global styles & utilities
├── data/               # Static data
│   └── cars.json       # Cars database
└── assets/             # Static assets
```

## 🚀 Instalasi & Penggunaan

### Prerequisites

- Node.js 18+
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd my-react-ssr
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

4. **Build untuk production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Dependencies

### Runtime Dependencies

- `react` - UI framework
- `react-dom` - DOM rendering
- `framer-motion` - Animasi
- `sass` - CSS preprocessor
- `react-router-dom` - Routing
- `react-hook-form` - Form management
- `swiper` - Carousel component

### Development Dependencies

- `vite` - Build tool
- `@vitejs/plugin-react` - Vite React plugin
- `eslint` - Code linting
- TypeScript type definitions

## 🎯 Best Practices Implemented

### Code Organization

- **Modular Components** - Single responsibility principle
- **Custom Hooks** - Logic separation dan reusability
- **SASS Architecture** - Variables, mixins, dan modular styles
- **Consistent Naming** - BEM methodology untuk CSS

### Performance

- **Code Splitting** - Route-based splitting
- **Optimized Images** - Responsive images dengan proper sizing
- **Efficient Animations** - Hardware-accelerated transforms

### User Experience

- **Responsive Design** - Mobile-first approach
- **Loading States** - Skeleton screens dan spinners
- **Form Validation** - Real-time validation feedback
- **Smooth Animations** - 60fps animations dengan Framer Motion

### Developer Experience

- **Hot Module Replacement** - Instant feedback saat development
- **ESLint Configuration** - Code quality assurance
- **SASS Variables** - Consistent design tokens

## 🔧 Kustomisasi

### Mengubah Warna

Edit file `src/styles/_variables.scss`:

```scss
$primary-color: #your-primary-color;
$secondary-color: #your-secondary-color;
```

### Menambah Data Mobil

Edit file `src/data/cars.json` dan tambahkan object mobil baru dengan struktur:

```json
{
  "id": 7,
  "name": "Nama Mobil",
  "type": "Tipe",
  "price": 400000,
  "transmission": "Manual/Automatic",
  "capacity": "5 Penumpang",
  "fuel": "Bensin/Diesel",
  "image": "url-gambar",
  "features": ["Fitur 1", "Fitur 2"],
  "description": "Deskripsi mobil"
}
```

### Menambah Animasi

Gunakan Framer Motion variants untuk animasi yang konsisten:

```jsx
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**CarRental Team**

- Email: info@carrental.com
- Website: [carrental.com](https://carrental.com)

---

⭐ Jika project ini membantu, jangan lupa beri star!

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
