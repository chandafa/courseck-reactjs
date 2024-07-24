// src/pages/CheckoutPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mulaiImage from '../assets/mulai.jpg'; // Pastikan jalur ke gambar benar

const CheckoutPage = () => {
    return (
        <CheckoutWrapper>
            <div className="message-banner">
                <p>Great choice, [Your Name]!</p>
                <button className="share-btn">Share this course</button>
            </div>
            <div className="course-details">
                <img src={mulaiImage} alt="Course Thumbnail" className="course-thumbnail" />
                <div className="course-info">
                    <h3>Web Design for Web Developers: Build Beautiful Websites!</h3>
                    <p>By Jonas Schmedtmann</p>
                    <div className="course-progress">
                        <p>Your progress</p>
                        <div className="progress-bar"></div>
                    </div>
                    <Link to="/start-course" className="start-course-btn">Start course</Link>
                </div>
            </div>
        </CheckoutWrapper>
    );
}

const CheckoutWrapper = styled.div`
  .message-banner {
    background-color: #acd2cc;
    padding: 25px;
    margin: 35px auto; /* Margin atas dan bawah 35px, otomatis kiri dan kanan */
    text-align: center;
    width: 90%; /* Atur lebar banner agar tidak melebihi lebar viewport */
    max-width: 1200px; /* Maksimal lebar banner */
    p {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    .share-btn {
      padding: 10px 20px;
      background-color: #00796b;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  }
  .course-details {
    display: flex;
    align-items: center;
    padding: 30px;
    margin: 35px auto; /* Margin atas dan bawah 35px, otomatis kiri dan kanan */
    background-color: #2d2f31; /* Ubah background menjadi hitam */
    width: 90%; /* Atur lebar container agar tidak melebihi lebar viewport */
    max-width: 1200px; /* Maksimal lebar container */
    box-sizing: border-box; /* Pastikan padding dan border diikutkan dalam lebar elemen */
    .course-thumbnail {
      max-width: 200px;
      margin-right: 20px;
    }
    .course-info {
      color: white; /* Ubah warna teks menjadi putih untuk kontras */
      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
      p {
        font-size: 1rem;
        color: #bdbdbd; /* Warna teks sekunder menjadi abu-abu terang */
        margin-bottom: 20px;
      }
      .course-progress {
        margin-bottom: 20px;
        p {
          font-size: 1rem;
          margin-bottom: 5px;
        }
        .progress-bar {
          width: 100%;
          height: 10px;
          background-color: #cfd8dc;
        }
      }
      .start-course-btn {
        padding: 10px 20px;
        background-color: blue; /* Ubah warna tombol menjadi biru */
        color: white;
        text-decoration: none;
        font-size: 1rem;
      }
    }
  }
`;

export default CheckoutPage;
