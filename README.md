# 🚀 DevOps Portfolio Website (AWS + CI/CD)

## 📌 Project Overview
This project demonstrates a complete DevOps workflow by deploying a static portfolio website using AWS S3 with automated CI/CD using GitHub Actions.

---

## 🧱 Architecture
- AWS S3 for static website hosting
- GitHub Actions for CI/CD pipeline
- IAM for secure access management

-       ┌──────────────┐
        │   Developer  │
        └──────┬───────┘
               │ push code
               ▼
        ┌──────────────┐
        │   GitHub     │
        └──────┬───────┘
               │ triggers
               ▼
        ┌──────────────┐
        │ GitHub Actions│
        └──────┬───────┘
               │ deploys
               ▼
        ┌──────────────┐
        │   AWS S3     │
        └──────┬───────┘
               │ hosts
               ▼
        🌐 Live Website

---

## ⚙️ Tech Stack
- HTML, CSS, JavaScript
- AWS S3
- GitHub Actions
- IAM

---

## 🔁 CI/CD Workflow
1. Code pushed to GitHub
2. GitHub Actions triggers pipeline
3. Files uploaded to S3 automatically
4. Website updates live

---

## 🌐 Live Demo
http://my-portfolo-s3.s3-website.eu-north-1.amazonaws.com

---

## 🔐 Security
- Used IAM user with access keys
- Stored credentials securely in GitHub Secrets

---

## 📸 Screenshots
Main Page
<img width="1920" height="1080" alt="Screenshot 2026-05-04 192138" src="https://github.com/user-attachments/assets/3ff3c857-f5c1-471e-9b9f-fe55a3815152" /> 

About Me
<img width="1920" height="1080" alt="Screenshot 2026-05-04 192149" src="https://github.com/user-attachments/assets/af2ec8f6-8dc8-484a-b9c1-35c8f63e251c" />

Skill and Technologies
<img width="1920" height="1080" alt="Screenshot 2026-05-04 192202" src="https://github.com/user-attachments/assets/ade51b9f-d258-47f5-b792-083e346f8d83" />

Projects
<img width="1920" height="1080" alt="Screenshot 2026-05-04 192222" src="https://github.com/user-attachments/assets/eb2b481a-4f0e-4e15-bb69-76cfda6c962f" />

Experience 
<img width="1920" height="1080" alt="Screenshot 2026-05-04 192250" src="https://github.com/user-attachments/assets/6f38ea25-29cb-4e0a-8b6c-efe59b4d0d91" />

Contact
<img width="1920" height="1080" alt="Screenshot 2026-05-04 192259" src="https://github.com/user-attachments/assets/99c48c3c-a7d0-4058-8fd8-60c83c67e4a8" />

---

## 📚 What I Learned
- Setting up CI/CD pipelines
- Debugging AWS permission issues (403 errors)
- Writing IAM policies
- Automating deployments

---
