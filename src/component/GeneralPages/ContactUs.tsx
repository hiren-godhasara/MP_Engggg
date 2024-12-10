'use client'
import React, { useRef, useState } from 'react';
import styles from './ContactUs.module.scss';
import Link from 'next/link';
import { ToastNotifications, showSuccessToast, showErrorToast } from '../../toastNotifications'
import Image from 'next/image';
import logo from '../../imageFolder/logo.png'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
        file: null
    });

const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleCheckEmail: any = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = emailRegex.test(formData.email);
        if (email === false) {
            showErrorToast('Invalid email address');
            return false;
        }
        return true;
    }

    const handleCheckMobile: any = () => {
        const mobileRegex = /^[1-9]\d{9}$/;
        const mobile = mobileRegex.test(formData.mobile);
        if (mobile === false) {
            showErrorToast('Invalid mobile number');
            return false;
        }
        return true;
    }
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (name === 'mobile' && isNaN(value)) {
            return;
        }
        if (name === 'file' && files.length > 0) {
            setFile(files[0]); // Store the file for separate upload
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleFileUpload = async () => {
        if (!file) return;

        const uploadData = new FormData();
        uploadData.append('file', file);

        try {
            const response = await fetch(`http://localhost:3333/api/v1/contactUs/file-upload`, {
                method: 'POST',
                body: uploadData
            });

            if (response.ok) {
                const data = await response.json();
                return data.data[0]; // Return the file URL after upload
            } else {
                const data = await response.json();
                showErrorToast(data.message);
            }
        } catch (error) {
            console.error('File upload failed:', error);
            showErrorToast("File upload failed");
        }
        return null;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (
            formData.name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.mobile.trim() === '' ||
            formData.message.trim() === ''
        ) {
            showErrorToast("Fill all mandatory fields");
            return;
        }

        if (!handleCheckEmail() || !handleCheckMobile()) {
            return;
        }

        let fileUrl = formData.file;

        // If a file is selected, upload it first
        if (file) {
            fileUrl = await handleFileUpload();
            if (!fileUrl) return; // Stop submission if the file upload fails
        }

        try {
            // Include the file URL in formData before sending
            const finalFormData = { ...formData, file: fileUrl };

            const response = await fetch(`http://localhost:3333/api/v1/contactUs/inquiry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalFormData),
            });

            if (response.ok) {
                const data = await response.json();
                showSuccessToast(data.message);
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: '',
                    file: null
                });
                 setFile(null); // Reset file state
                if (fileInputRef.current) {
                    fileInputRef.current.value = ''; // Reset file input element
                }
            } else {
                const data = await response.json();
                showErrorToast(data.message);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            showErrorToast('Form submission failed');
        }
    };

    return (
        <div className={styles.backImg}>
            <div className={styles.main}>
                <div className={styles.head}>Contact Us</div>
                <div className={styles.contactContainer}>
                    <div className={styles.leftSection}>
                        <h1 className={styles.h1}>
                            <Image src={logo} alt="Company logo" fill={true} style={{ objectFit: "contain" }} />
                        </h1>
                        <p><strong>Address:</strong> 45, Shreenathji Estate, Nr. PNB Bank,Phase-1 Vavtva GIDC, Vatva, Ahmedabad – 382445.</p>
                        <p><strong>Email:</strong> <Link href="mailto:mpengineering2@gmail.com">mpengineering2@gmail.com</Link></p>
                        <p><strong>Mobile:</strong> +91-97240 09770, +91-98242 52612</p>
                    </div>
                    <div className={styles.rightSection}>
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <label>Name:<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                            <label>Email:<span style={{ color: 'red' }}>*</span></label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                            <div className={styles.div}>
                                <label>Phone Number: <span style={{ color: 'red' }}>*</span></label>
                                <div className={styles.num}>
                                    <input
                                        className={styles.code}
                                        maxLength={6}
                                        type="tel"
                                        name="countryCode"
                                        value={`+91`}
                                        readOnly
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Enter Phone"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        maxLength={10}
                                        required
                                    />
                                </div>
                            </div>
                            <label>Upload File:</label>
                            <input type="file" id="file" name="file" ref={fileInputRef} onChange={handleChange} />

                            <label>Message:<span style={{ color: 'red' }}>*</span></label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

                            <div className={styles.buttonContainer}>
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastNotifications />
            </div>
        </div>
    );
};

export default ContactUs;
