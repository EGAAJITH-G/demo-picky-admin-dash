"use client";

import React, { useState, useEffect } from 'react';
import styles from './SideNav.module.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SideNav = ({ isMinimized, setIsMinimized }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Track open state for categories
  const [vendorOpen, setVendorOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [couponOpen, setCouponOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [posterOpen, setPosterOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [helpCenterOpen, setHelpCenterOpen] = useState(false);

  // Helper to check if a route is active
  const isActive = (path) => pathname === path;

  // Custom Click Handler for Category Navigation + Dropdown toggle
  const handleCategoryClick = (basePath, openSetter, currentState) => {
    // Navigate to base path (Overview Page)
    router.push(basePath);
    // Toggle the dropdown for visibility
    openSetter(!currentState);
  };
  // Helper to check if any child of a category is active
  const isCategoryActive = (categoryPath) => pathname.startsWith(categoryPath);

  // Initialize and persist open states based on current pathname
  useEffect(() => {
    if (pathname.includes('/vendor-management')) setVendorOpen(true);
    if (pathname.includes('/customer-management')) setCustomerOpen(true);
    if (pathname.includes('/product-management')) setProductOpen(true);
    if (pathname.includes('/category-management')) setCategoryOpen(true);
    if (pathname.includes('/order-management')) setOrderOpen(true);
    if (pathname.includes('/payment-management')) setPaymentOpen(true);
    if (pathname.includes('/reviews')) setReviewsOpen(true);
    if (pathname.includes('/coupon-management')) setCouponOpen(true);
    if (pathname.includes('/inventory-management')) setInventoryOpen(true);
    if (pathname.includes('/shipping-management')) setShippingOpen(true);
    if (pathname.includes('/reports')) setReportOpen(true);
    if (pathname.includes('/poster-management')) setPosterOpen(true);
    if (pathname.includes('/blog-management')) setBlogOpen(true);
    if (pathname.includes('/seo-management')) setSeoOpen(true);
    if (pathname.includes('/game-rewards')) setGameOpen(true);
    if (pathname.includes('/help-center')) setHelpCenterOpen(true);
  }, [pathname]);

  const menuItems = [
    { name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', href: '/' },
  ];

  const vendorSubItems = [
    { name: 'Vendor Add', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Vendor List', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { name: 'Approve/Reject Vendor', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Vendor Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Vendor Product', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Vendor Order', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Vendor Earnings', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Vendor (Active/Block)', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
    { name: 'Product ID Create', icon: 'M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01' },
    { name: 'SKU Specific Create', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 011-1' }
  ];

  const customerSubItems = [
    { name: 'Customer List', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Customer Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Order History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Customer Payment Method', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Search', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  ];

  const productSubItems = [
    { name: 'Product (Add/Edit/Delete)', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { name: 'Product Categories', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { name: 'Product Live Preview', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { name: 'Product Stock Management', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Product Status', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Product Approval', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'SKU', icon: 'M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01' }
  ];

  const categorySubItems = [
    { name: 'Clothing', icon: 'M21 7.242V19a2 2 0 01-2 2H5a2 2 0 01-2-2V7.242m18 0L21 7m0 0l-4.5-4.5M21 7.242L16.5 2.742m0 0l-9 0m9 0L12 7.242m-4.5-4.5L3 7m0 0L2.25 8.242M3 7.242L7.5 2.742' },
    { name: 'Electronics', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { name: 'Beauty Products', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { name: 'Kitchen Products', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Gifts', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Other Products', icon: 'M5 12h14M5 12l4-4m-4 4l4 4' },
  ];

  const orderSubItems = [
    { name: 'Order List', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Order Details', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Order Status Update', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
    { name: 'Order Tracking', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  const paymentSubItems = [
    { name: 'Payment History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Payment Method', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Vendor Payout', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Refund Management', icon: 'M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3' },
    { name: 'Overall Payment Management', icon: 'M9 17v-2a4 4 0 114 4H9z' },
  ];

  const reviewsSubItems = [
    { name: 'Product Review', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { name: 'Approval / Delete', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
    { name: 'Rating System', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { name: 'Customer Rating', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  const couponSubItems = [
    { name: 'Create Coupon', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Discount Percentage', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { name: 'Expiry Date', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Usage Limit', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  const inventorySubItems = [
    { name: 'Stock Quantity', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'New Stocks', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { name: 'Low Stock Alert', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { name: 'Update Inventory', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  ];

  const shippingSubItems = [
    { name: 'Shipping Address', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { name: 'Delivery Partners', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Shipping Charges', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Order Tracking ID', icon: 'M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01' },
  ];

  const reportSubItems = [
    { name: 'Sales Report', icon: 'M9 17v-2a4 4 0 114 4H9z' },
    { name: 'Vendor Sales', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Product Sales', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Monthly Revenue', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
    { name: 'Customer Growth & Usage', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  ];

  const posterSubItems = [
    { name: 'Create Poster', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Poster List', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  ];

  const blogSubItems = [
    { name: 'Create Blog', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { name: 'Blog List', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  ];

  const seoSubItems = [
    { name: 'Global SEO', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
    { name: 'Page SEO', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Product SEO', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { name: 'Blog SEO', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { name: 'Sitemap & Robots', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
  ];

  const gameSubItems = [
    { name: 'Game Management', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Reward Management', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
    { name: 'User Rewards', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Leaderboard', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  ];

  const helpCenterSubItems = [
    { name: 'FAQ Management', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Contact Support', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Raise Ticket', icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' },
    { name: 'Ticket Status / List', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { name: 'Live Chat', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' }
  ];

  return (
    <aside className={`${styles.sidebar} ${isMinimized ? styles.minimized : ''}`}>
      <div className={styles.logoSection}>
        {!isMinimized && (
          <div className={styles.logoWrapper}>
            <div className={styles.brandGroup}>
              <img src="/logo.png" alt="Picky Logo" className={styles.logoImage} />
              <div className={styles.brandText}>
                <h1 className={styles.logo}>Picky</h1>
                <p className={styles.tagline}>ADMIN PANEL</p>
              </div>
            </div>
          </div>
        )}
        <button
          className={styles.toggleBtn}
          onClick={() => setIsMinimized(!isMinimized)}
          title={isMinimized ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <svg className={styles.toggleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMinimized ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7M19 19l-7-7 7-7"}></path>
          </svg>
        </button>
      </div>

      <div className={styles.scrollContainer}>
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.navItem} ${isActive(item.href) ? styles.active : ''}`}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
              </svg>
              {!isMinimized && <span>{item.name}</span>}
            </Link>
          ))}

          {/* Vendor Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/vendor-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/vendor-management', setVendorOpen, vendorOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              {!isMinimized && <span>Vendor Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${vendorOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${vendorOpen ? styles.show : ''}`}>
                {vendorSubItems.map((subItem) => {
                  const subHref = `/vendor-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/product-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/product-management', setProductOpen, productOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              {!isMinimized && <span>Product Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${productOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${productOpen ? styles.show : ''}`}>
                {productSubItems.map((subItem) => {
                  const subHref = `/product-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Category Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/category-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/category-management', setCategoryOpen, categoryOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
              {!isMinimized && <span>Category Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${categoryOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${categoryOpen ? styles.show : ''}`}>
                {categorySubItems.map((subItem) => {
                  const subHref = `/category-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Customer Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/customer-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/customer-management', setCustomerOpen, customerOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {!isMinimized && <span>Customer Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${customerOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${customerOpen ? styles.show : ''}`}>
                {customerSubItems.map((subItem) => {
                  const subHref = `/customer-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Order Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/order-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/order-management', setOrderOpen, orderOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              {!isMinimized && <span>Order Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${orderOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${orderOpen ? styles.show : ''}`}>
                {orderSubItems.map((subItem) => {
                  const subHref = `/order-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Payment Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/payment-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/payment-management', setPaymentOpen, paymentOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              {!isMinimized && <span>Payment Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${paymentOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${paymentOpen ? styles.show : ''}`}>
                {paymentSubItems.map((subItem) => {
                  const subHref = `/payment-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Reviews */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/reviews') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/reviews', setReviewsOpen, reviewsOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              {!isMinimized && <span>Reviews</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${reviewsOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>

            {!isMinimized && (
              <div className={`${styles.submenu} ${reviewsOpen ? styles.show : ''}`}>
                {reviewsSubItems.map((subItem) => {
                  const subHref = `/reviews/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link
                      key={subHref}
                      href={subHref}
                      className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}
                    >
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Coupon & Discount Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/coupon-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/coupon-management', setCouponOpen, couponOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
              </svg>
              {!isMinimized && <span>Coupon & Discount Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${couponOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${couponOpen ? styles.show : ''}`}>
                {couponSubItems.map((subItem) => {
                  const subHref = `/coupon-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Inventory & Stock Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/inventory-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/inventory-management', setInventoryOpen, inventoryOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              {!isMinimized && <span>Inventory & Stock Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${inventoryOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${inventoryOpen ? styles.show : ''}`}>
                {inventorySubItems.map((subItem) => {
                  const subHref = `/inventory-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Shipping Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/shipping-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/shipping-management', setShippingOpen, shippingOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h8zM9 21h.01M17 10h4m-4 4h4m-4-8h4m-9 4h.01M9 14h.01M9 6h.01"></path>
              </svg>
              {!isMinimized && <span>Shipping Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${shippingOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${shippingOpen ? styles.show : ''}`}>
                {shippingSubItems.map((subItem) => {
                  const subHref = `/shipping-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Report & Analytics */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/reports') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/reports', setReportOpen, reportOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              {!isMinimized && <span>Report & Analytics</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${reportOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${reportOpen ? styles.show : ''}`}>
                {reportSubItems.map((subItem) => {
                  const subHref = `/reports/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Poster Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/poster-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/poster-management', setPosterOpen, posterOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {!isMinimized && <span>Poster Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${posterOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${posterOpen ? styles.show : ''}`}>
                {posterSubItems.map((subItem) => {
                  const subHref = `/poster-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Blog Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/blog-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/blog-management', setBlogOpen, blogOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              {!isMinimized && <span>Blog Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${blogOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${blogOpen ? styles.show : ''}`}>
                {blogSubItems.map((subItem) => {
                  const subHref = `/blog-management/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* SEO Management */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/seo-management') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/seo-management', setSeoOpen, seoOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              {!isMinimized && <span>SEO Management</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${seoOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${seoOpen ? styles.show : ''}`}>
                {seoSubItems.map((subItem) => {
                  let subHref = `/seo-management/${subItem.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Game & Rewards */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/game-rewards') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/game-rewards', setGameOpen, gameOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {!isMinimized && <span>Game & Rewards</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${gameOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${gameOpen ? styles.show : ''}`}>
                {gameSubItems.map((subItem) => {
                  const subHref = `/game-rewards/${subItem.name.toLowerCase().replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Help Center */}
          <div className={styles.dropdownContainer}>
            <button
              className={`${styles.navItem} ${isCategoryActive('/help-center') ? styles.categoryActive : ''}`}
              onClick={() => handleCategoryClick('/help-center', setHelpCenterOpen, helpCenterOpen)}
            >
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              {!isMinimized && <span>Help Center</span>}
              {!isMinimized && (
                <svg className={`${styles.chevron} ${helpCenterOpen ? styles.rotated : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            {!isMinimized && (
              <div className={`${styles.submenu} ${helpCenterOpen ? styles.show : ''}`}>
                {helpCenterSubItems.map((subItem) => {
                  let subHref = `/help-center/${subItem.name.toLowerCase().replace(/ \/ /g, '-').replace(/\s+/g, '-').replace(/[\(\)\/]/g, '')}`;
                  if (subItem.name === 'Ticket Status / List') subHref = '/help-center/ticket-status-list';

                  return (
                    <Link key={subHref} href={subHref} className={`${styles.subItem} ${isActive(subHref) ? styles.subActive : ''}`}>
                      <svg className={styles.subIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={subItem.icon}></path>
                      </svg>
                      <span>{subItem.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* System Settings */}
          <Link
            href="/settings"
            className={`${styles.navItem} ${isActive('/settings') ? styles.active : ''}`}
            style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}
          >
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {!isMinimized && <span>System Settings</span>}
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
