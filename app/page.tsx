"use client";

import { useState } from "react";

const telegram = "https://t.me/Teledent_treatment_bot";
type Lang = "en" | "ru" | "he";

const copy = {
  en: {
    nav: ["Technology", "How it works", "Team"], open: "Open Telegram", badge: "AI TELEMEDICINE IN TELEGRAM",
    title: "Your dental AI assistant.", accent: "Always within reach.",
    lead: "TeleDent combines AI vision, OCR and professional dental review in one familiar Telegram chat.", start: "Start in Telegram", learn: "Explore technology",
    stats: [["AI Vision", "screens dental images"], ["OCR", "reads reports and data"], ["Telegram", "no new app required"], ["Expert review", "human oversight"]],
    detailLabel: "WHAT TELEDENT DOES", detailTitle: "One intelligent workflow for every step.",
    details: [["â—‰", "Dental image screening", "AI vision helps highlight relevant areas in photos and X-rays for further review."], ["Aa", "OCR recognition", "Extracts text, dates, tooth numbers and measurements from referrals and reports."], ["âŒ", "Smart routing", "Organizes the patientâ€™s concern so the right information reaches a specialist."], ["âœ¦", "Structured summary", "Turns messages and uploaded files into a concise, readable clinical overview."], ["â—‡", "Privacy-first flow", "Keeps the consultation inside a focused, controlled digital workflow."], ["âœ“", "Professional validation", "A dental professional reviews the AI-prepared information before guidance is sent."]],
    techLabel: "SMART DENTAL WORKFLOW", techTitle: "Advanced technology. Simple conversation.",
    cards: [["01", "Send", "Share a photo, X-ray or document securely through Telegram."], ["02", "Analyze", "AI vision screens the image and OCR extracts text and measurements."], ["03", "Review", "A dental professional checks the result and provides clear next steps."]],
    humanLabel: "AI WITH HUMAN OVERSIGHT", humanTitle: "Technology supports care. It never replaces professional judgment.",
    benefits: [["Fast orientation", "Organized information helps specialists respond efficiently."], ["Structured data", "OCR converts reports and referrals into useful digital data."], ["Familiar experience", "Patients communicate in Telegram instead of installing another app."]],
    teamLabel: "OUR TEAM", teamTitle: "The people behind TeleDent", ready: "Ready to get started?", readyText: "Open TeleDent in Telegram and take the first step.", footer: "AI-powered dental telemedicine"
  },
  ru: {
    nav: ["Ð¢ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸", "ÐšÐ°Ðº ÑÑ‚Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚", "ÐšÐ¾Ð¼Ð°Ð½Ð´Ð°"], open: "ÐžÑ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Telegram", badge: "AI-Ð¢Ð•Ð›Ð•ÐœÐ•Ð”Ð˜Ð¦Ð˜ÐÐ Ð’ TELEGRAM",
    title: "Ð’Ð°Ñˆ ÑÑ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð»Ð¾Ð³Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ AI-Ð°ÑÑÐ¸ÑÑ‚ÐµÐ½Ñ‚.", accent: "Ð’ÑÐµÐ³Ð´Ð° Ñ€ÑÐ´Ð¾Ð¼.",
    lead: "TeleDent Ð¾Ð±ÑŠÐµÐ´Ð¸Ð½ÑÐµÑ‚ ÐºÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€Ð½Ð¾Ðµ Ð·Ñ€ÐµÐ½Ð¸Ðµ, OCR Ð¸ Ð¿Ñ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½ÑƒÑŽ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÑƒ ÑÑ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð»Ð¾Ð³Ð° Ð² Ð¿Ñ€Ð¸Ð²Ñ‹Ñ‡Ð½Ð¾Ð¼ Ñ‡Ð°Ñ‚Ðµ Telegram.", start: "ÐÐ°Ñ‡Ð°Ñ‚ÑŒ Ð² Telegram", learn: "Ðž Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸ÑÑ…",
    stats: [["AI Vision", "Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€ÑƒÐµÑ‚ ÑÐ½Ð¸Ð¼ÐºÐ¸"], ["OCR", "ÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°ÐµÑ‚ Ð·Ð°ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ñ"], ["Telegram", "Ð½Ðµ Ð½ÑƒÐ¶Ð½Ð¾ Ð½Ð¾Ð²Ð¾Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ"], ["Ð­ÐºÑÐ¿ÐµÑ€Ñ‚", "Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑÐµÑ‚ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚"]],
    detailLabel: "Ð’ÐžÐ—ÐœÐžÐ–ÐÐžÐ¡Ð¢Ð˜ TELEDENT", detailTitle: "Ð•Ð´Ð¸Ð½Ñ‹Ð¹ Ð¸Ð½Ñ‚ÐµÐ»Ð»ÐµÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ Ð½Ð° ÐºÐ°Ð¶Ð´Ð¾Ð¼ ÑÑ‚Ð°Ð¿Ðµ.",
    details: [["â—‰", "ÐÐ½Ð°Ð»Ð¸Ð· Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ð¹", "AI Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÐµÑ‚ Ð²Ñ‹Ð´ÐµÐ»ÑÑ‚ÑŒ Ð²Ð°Ð¶Ð½Ñ‹Ðµ Ð¾Ð±Ð»Ð°ÑÑ‚Ð¸ Ð½Ð° Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸ÑÑ… Ð¸ Ñ€ÐµÐ½Ñ‚Ð³ÐµÐ½Ð¾Ð²ÑÐºÐ¸Ñ… ÑÐ½Ð¸Ð¼ÐºÐ°Ñ…."], ["Aa", "OCR-Ñ€Ð°ÑÐ¿Ð¾Ð·Ð½Ð°Ð²Ð°Ð½Ð¸Ðµ", "Ð˜Ð·Ð²Ð»ÐµÐºÐ°ÐµÑ‚ Ñ‚ÐµÐºÑÑ‚, Ð´Ð°Ñ‚Ñ‹, Ð½Ð¾Ð¼ÐµÑ€Ð° Ð·ÑƒÐ±Ð¾Ð² Ð¸ Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»Ð¸ Ð¸Ð· Ð·Ð°ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ð¹ Ð¸ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ð¹."], ["âŒ", "Ð£Ð¼Ð½Ð°Ñ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚Ð¸Ð·Ð°Ñ†Ð¸Ñ", "ÐžÑ€Ð³Ð°Ð½Ð¸Ð·ÑƒÐµÑ‚ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ†Ð¸ÐµÐ½Ñ‚Ð° Ð¸ Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‘Ñ‚ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚Ñƒ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ."], ["âœ¦", "Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ðµ Ñ€ÐµÐ·ÑŽÐ¼Ðµ", "ÐŸÑ€ÐµÐ²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ Ð² ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ð¹ Ð¸ Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ð¹ ÐºÐ»Ð¸Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ Ð¾Ð±Ð·Ð¾Ñ€."], ["â—‡", "ÐŸÑ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ", "ÐšÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ñ Ð¿Ñ€Ð¾Ñ…Ð¾Ð´Ð¸Ñ‚ Ð² ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»Ð¸Ñ€ÑƒÐµÐ¼Ð¾Ð¼ Ð·Ð°Ñ‰Ð¸Ñ‰Ñ‘Ð½Ð½Ð¾Ð¼ Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ð¾Ð¼ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ðµ."], ["âœ“", "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚Ð¾Ð¼", "Ð¡Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð»Ð¾Ð³ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑÐµÑ‚ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²Ð»ÐµÐ½Ð½ÑƒÑŽ AI Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð¿ÐµÑ€ÐµÐ´ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÐºÐ¾Ð¹ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð°Ñ†Ð¸Ð¹."]],
    techLabel: "Ð£ÐœÐÐ«Ð™ Ð¡Ð¢ÐžÐœÐÐ¢ÐžÐ›ÐžÐ“Ð˜Ð§Ð•Ð¡ÐšÐ˜Ð™ Ð¡Ð•Ð Ð’Ð˜Ð¡", techTitle: "Ð¡Ð»Ð¾Ð¶Ð½Ñ‹Ðµ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸. ÐŸÑ€Ð¾ÑÑ‚Ð¾Ðµ Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ.",
    cards: [["01", "ÐžÑ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ", "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚Ðµ Ñ„Ð¾Ñ‚Ð¾, Ñ€ÐµÐ½Ñ‚Ð³ÐµÐ½ Ð¸Ð»Ð¸ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚ Ñ‡ÐµÑ€ÐµÐ· Ð·Ð°Ñ‰Ð¸Ñ‰Ñ‘Ð½Ð½Ñ‹Ð¹ Ñ‡Ð°Ñ‚ Telegram."], ["02", "AI-Ð°Ð½Ð°Ð»Ð¸Ð·", "ÐšÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€Ð½Ð¾Ðµ Ð·Ñ€ÐµÐ½Ð¸Ðµ Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€ÑƒÐµÑ‚ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ, Ð° OCR Ð¸Ð·Ð²Ð»ÐµÐºÐ°ÐµÑ‚ Ñ‚ÐµÐºÑÑ‚ Ð¸ Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÐµÐ»Ð¸."], ["03", "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ°", "Ð¡Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð»Ð¾Ð³ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑÐµÑ‚ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚ Ð¸ Ð´Ð°Ñ‘Ñ‚ Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ðµ Ð´Ð°Ð»ÑŒÐ½ÐµÐ¹ÑˆÐ¸Ðµ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð°Ñ†Ð¸Ð¸."]],
    humanLabel: "AI ÐŸÐžÐ” ÐšÐžÐÐ¢Ð ÐžÐ›Ð•Ðœ Ð¡ÐŸÐ•Ð¦Ð˜ÐÐ›Ð˜Ð¡Ð¢Ð", humanTitle: "Ð¢ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÑŽÑ‚ Ð²Ñ€Ð°Ñ‡Ñƒ, Ð½Ð¾ Ð½Ðµ Ð·Ð°Ð¼ÐµÐ½ÑÑŽÑ‚ Ð¿Ñ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾Ðµ Ñ€ÐµÑˆÐµÐ½Ð¸Ðµ.",
    benefits: [["Ð‘Ñ‹ÑÑ‚Ñ€Ð°Ñ Ð¾Ñ€Ð¸ÐµÐ½Ñ‚Ð°Ñ†Ð¸Ñ", "Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÑŽÑ‚ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚Ñƒ Ð±Ñ‹ÑÑ‚Ñ€ÐµÐµ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ÑŒ."], ["Ð¦Ð¸Ñ„Ñ€Ð¾Ð²Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ", "OCR Ð¿Ñ€ÐµÐ²Ñ€Ð°Ñ‰Ð°ÐµÑ‚ Ð·Ð°ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ñ Ð¸ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð² ÑƒÐ´Ð¾Ð±Ð½ÑƒÑŽ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ."], ["ÐŸÑ€Ð¸Ð²Ñ‹Ñ‡Ð½Ñ‹Ð¹ Ð¸Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ", "ÐŸÐ°Ñ†Ð¸ÐµÐ½Ñ‚ Ð¾Ð±Ñ‰Ð°ÐµÑ‚ÑÑ Ð² Telegram Ð±ÐµÐ· ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ¸ Ð½Ð¾Ð²Ð¾Ð³Ð¾ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ."]],
    teamLabel: "ÐÐÐ¨Ð ÐšÐžÐœÐÐÐ”Ð", teamTitle: "Ð›ÑŽÐ´Ð¸, ÑÐ¾Ð·Ð´Ð°ÑŽÑ‰Ð¸Ðµ TeleDent", ready: "Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ?", readyText: "ÐžÑ‚ÐºÑ€Ð¾Ð¹Ñ‚Ðµ TeleDent Ð² Telegram Ð¸ ÑÐ´ÐµÐ»Ð°Ð¹Ñ‚Ðµ Ð¿ÐµÑ€Ð²Ñ‹Ð¹ ÑˆÐ°Ð³.", footer: "Ð¡Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¾Ð»Ð¾Ð³Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ñ‚ÐµÐ»ÐµÐ¼ÐµÐ´Ð¸Ñ†Ð¸Ð½Ð° Ñ AI"
  },
  he: {
    nav: ["×˜×›× ×•×œ×•×’×™×”", "××™×š ×–×” ×¢×•×‘×“", "×¦×•×•×ª"], open: "×¤×ª×™×—×” ×‘×˜×œ×’×¨×", badge: "×¨×¤×•××ª ×©×™× ×™×™× ×ž×‘×•×¡×¡×ª AI ×‘×˜×œ×’×¨×",
    title: "×¢×•×–×¨ ×¨×¤×•××ª ×”×©×™× ×™×™× ×”×—×›× ×©×œ×š.", accent: "×ª×ž×™×“ ×‘×”×™×©×’ ×™×“.",
    lead: "TeleDent ×ž×©×œ×‘×ª ×¨××™×™×” ×ž×ž×•×—×©×‘×ª, OCR ×•×‘×“×™×§×” ×ž×§×¦×•×¢×™×ª ×©×œ ×¨×•×¤× ×©×™× ×™×™× â€” ×‘×¦×³××˜ ×˜×œ×’×¨× ×ž×•×›×¨ ×•× ×•×—.", start: "×ž×ª×—×™×œ×™× ×‘×˜×œ×’×¨×", learn: "×¢×œ ×”×˜×›× ×•×œ×•×’×™×”",
    stats: [["×¨××™×™×ª AI", "× ×™×ª×•×— ×ª×ž×•× ×•×ª ×©×™× ×™×™×"], ["OCR", "×§×¨×™××ª ×“×•×—×•×ª ×•× ×ª×•× ×™×"], ["×˜×œ×’×¨×", "×œ×œ× ×”×ª×§× ×ª ××¤×œ×™×§×¦×™×”"], ["×‘×“×™×§×ª ×ž×•×ž×—×”", "×¤×™×§×•×— ×× ×•×©×™"]],
    detailLabel: "×ž×” TELEDENT ×¢×•×©×”", detailTitle: "×ª×”×œ×™×š ×—×›× ××—×“ ×œ×›×œ ×©×œ×‘.",
    details: [["â—‰", "×¡×¨×™×§×ª ×ª×ž×•× ×•×ª ×©×™× ×™×™×", "×¨××™×™×ª AI ×ž×¡×™×™×¢×ª ×œ×–×”×•×ª ××–×•×¨×™× ×¨×œ×•×•× ×˜×™×™× ×‘×ª×ž×•× ×•×ª ×•×‘×¦×™×œ×•×ž×™ ×¨× ×˜×’×Ÿ."], ["Aa", "×–×™×”×•×™ OCR", "×—×™×œ×•×¥ ×˜×§×¡×˜, ×ª××¨×™×›×™×, ×ž×¡×¤×¨×™ ×©×™× ×™×™× ×•×ž×“×™×“×•×ª ×ž×“×•×—×•×ª ×•×”×¤× ×™×•×ª."], ["âŒ", "× ×™×ª×•×‘ ×—×›×", "××¨×’×•×Ÿ ×¤× ×™×™×ª ×”×ž×˜×•×¤×œ ×›×š ×©×”×ž×™×“×¢ ×”× ×›×•×Ÿ ×™×’×™×¢ ×œ×ž×•×ž×—×”."], ["âœ¦", "×¡×™×›×•× ×ž×•×‘× ×”", "×”×¤×™×›×ª ×”×•×“×¢×•×ª ×•×§×‘×¦×™× ×œ×¡×§×™×¨×” ×§×œ×™× ×™×ª ×§×¦×¨×” ×•×‘×¨×•×¨×”."], ["â—‡", "×ª×”×œ×™×š ×ž×ž×•×§×“ ×¤×¨×˜×™×•×ª", "×©×ž×™×¨×ª ×”×™×™×¢×•×¥ ×‘×ž×¡×’×¨×ª ×“×™×’×™×˜×œ×™×ª ×ž×ž×•×§×“×ª ×•×ž×‘×•×§×¨×ª."], ["âœ“", "××™×ž×•×ª ×ž×§×¦×•×¢×™", "×¨×•×¤× ×©×™× ×™×™× ×‘×•×“×§ ××ª ×”×ž×™×“×¢ ×©×”×•×›×Ÿ ×‘×¢×–×¨×ª AI ×œ×¤× ×™ ×©×œ×™×—×ª ×”×”× ×—×™×•×ª."]],
    techLabel: "×ª×”×œ×™×š ×¨×¤×•××ª ×©×™× ×™×™× ×—×›×", techTitle: "×˜×›× ×•×œ×•×’×™×” ×ž×ª×§×“×ž×ª. ×©×™×—×” ×¤×©×•×˜×”.",
    cards: [["01", "×©×•×œ×—×™×", "×ž×¢×œ×™× ×ª×ž×•× ×”, ×¦×™×œ×•× ×¨× ×˜×’×Ÿ ××• ×ž×¡×ž×š ×‘××•×¤×Ÿ ×ž××•×‘×˜×— ×‘×˜×œ×’×¨×."], ["02", "×ž× ×ª×—×™×", "×¨××™×™×ª AI ×¡×•×¨×§×ª ××ª ×”×ª×ž×•× ×” ×•-OCR ×ž×—×œ×¥ ×˜×§×¡×˜ ×•×ž×“×™×“×•×ª."], ["03", "×‘×•×“×§×™×", "×¨×•×¤× ×©×™× ×™×™× ×‘×•×“×§ ××ª ×”×ª×•×¦××” ×•×ž×¡×¤×§ ×”× ×—×™×•×ª ×‘×¨×•×¨×•×ª ×œ×”×ž×©×š."]],
    humanLabel: "AI ×‘×¤×™×§×•×— ×× ×•×©×™", humanTitle: "×”×˜×›× ×•×œ×•×’×™×” ×ª×•×ž×›×ª ×‘×˜×™×¤×•×œ â€” ×•××™× ×” ×ž×—×œ×™×¤×” ×©×™×§×•×œ ×“×¢×ª ×ž×§×¦×•×¢×™.",
    benefits: [["×”×›×•×•× ×” ×ž×”×™×¨×”", "×ž×™×“×¢ ×ž××•×¨×’×Ÿ ×¢×•×–×¨ ×œ×ž×•×ž×—×” ×œ×”×©×™×‘ ×‘×™×¢×™×œ×•×ª."], ["× ×ª×•× ×™× ×ž×•×‘× ×™×", "OCR ×”×•×¤×š ×“×•×—×•×ª ×•×”×¤× ×™×•×ª ×œ× ×ª×•× ×™× ×“×™×’×™×˜×œ×™×™× ×©×™×ž×•×©×™×™×."], ["×—×•×•×™×” ×ž×•×›×¨×ª", "×ž×ª×§×©×¨×™× ×‘×˜×œ×’×¨× ×œ×œ× ×¦×•×¨×š ×‘××¤×œ×™×§×¦×™×” × ×•×¡×¤×ª."]],
    teamLabel: "×”×¦×•×•×ª ×©×œ× ×•", teamTitle: "×”×× ×©×™× ×©×ž××—×•×¨×™ TeleDent", ready: "×ž×•×›× ×™× ×œ×”×ª×—×™×œ?", readyText: "×¤×•×ª×—×™× ××ª TeleDent ×‘×˜×œ×’×¨× ×•×¢×•×©×™× ××ª ×”×¦×¢×“ ×”×¨××©×•×Ÿ.", footer: "×¨×¤×•××ª ×©×™× ×™×™× ×ž×¨×—×•×§ ×ž×‘×•×¡×¡×ª AI"
  }
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const rtl = lang === "he";
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
    <nav className="nav shell"><a className="brand" href="#top"><img src="/teledent-vip.png" alt="TeleDent"/><span>TELE<span>DENT</span></span></a><div className="navLinks"><a href="#technology">{t.nav[0]}</a><a href="#how">{t.nav[1]}</a><a href="#team">{t.nav[2]}</a></div><div className="navActions"><div className="langs" aria-label="Language selector">{(["en","ru","he"] as Lang[]).map(l=><button key={l} onClick={()=>setLang(l)} className={lang===l?"active":""}>{l==="en"?"EN":l==="ru"?"RU":"×¢×‘"}</button>)}</div><a className="navCta" href={telegram}>{t.open} <span>â†—</span></a></div></nav>

    <section className="hero shell" id="top"><div className="heroCopy"><div className="eyebrow"><i/> {t.badge}</div><h1>{t.title}<br/><em>{t.accent}</em></h1><p className="lead">{t.lead}</p><div className="heroActions"><a className="primary" href={telegram}>{t.start}<span>â†—</span></a><a className="secondary" href="#technology">{t.learn}<span>â†“</span></a></div></div><div className="heroVisual"><div className="halo"/><img src="/teledent-vip.png" alt="TeleDent AI dental assistant emblem"/><span className="orbit one">AI</span><span className="orbit two">OCR</span><span className="orbit three">24/7</span></div></section>

    <section className="stats"><div className="shell statsGrid">{t.stats.map(([a,b])=><div key={a}><b>{a}</b><span>{b}</span></div>)}</div></section>

    <section className="details section shell"><div className="sectionIntro"><span className="kicker">{t.detailLabel}</span><h2>{t.detailTitle}</h2></div><div className="detailGrid">{t.details.map(([icon,title,body],i)=><article key={title}><div className="detailTop"><span className="detailIcon">{icon}</span><small>0{i+1}</small></div><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="section shell" id="technology"><div className="sectionIntro"><span className="kicker">{t.techLabel}</span><h2>{t.techTitle}</h2></div><div className="steps" id="how">{t.cards.map(([n,title,body],i)=><article key={n} className={i===1?"featured":""}><span>{n}</span><div className="stepIcon">{i===0?"â†—":i===1?"â—Ž":"âœ“"}</div><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="human"><div className="shell humanGrid"><div><span className="kicker gold">{t.humanLabel}</span><h2>{t.humanTitle}</h2></div><div className="benefitList">{t.benefits.map(([a,b],i)=><div key={a}><b>0{i+1}</b><p><strong>{a}</strong><span>{b}</span></p></div>)}</div></div></section>

    <section className="team section shell" id="team"><div className="sectionIntro"><span className="kicker">{t.teamLabel}</span><h2>{t.teamTitle}</h2></div><div className="teamGrid"><article className="person"><div className="portrait"><img src="/german-aller.png" alt="Nikolay Vinokurov"/></div><div><h3>Nikolay Vinokurov</h3><p>Product Manager &amp; Business Analyst</p></div></article><article className="person"><div className="portrait"><img src="/nik-vin.png" alt="German Aller"/></div><div><h3>German Aller</h3><p>CEO &amp; Founder, TeleDent</p></div></article></div></section>

    <section className="cta shell"><div className="ctaCopy"><span className="kicker">TELEDENT VIP</span><h2>{t.ready}</h2><p>{t.readyText}</p><a className="primary" href={telegram}>{t.start}<span>â†—</span></a></div><a className="botCard" href={telegram} aria-label="Open Teledent treatment bot in Telegram"><img src="/telegram-bot-qr.png" alt="QR code for Teledent treatment bot"/><div><small>TELEGRAM BOT</small><b>@Teledent_treatment_bot</b><span>Scan QR or tap to open â†—</span></div></a></section>
    <footer className="shell"><a className="brand" href="#top"><img src="/teledent-vip.png" alt=""/><span>TELE<span>DENT</span></span></a><p>{t.footer}</p><p>Â© 2026 TeleDent</p></footer>
  </main>;
}

