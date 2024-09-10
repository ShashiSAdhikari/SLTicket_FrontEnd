import React, { useState } from 'react';
import './profileDetailSStyles.css'; // Import the CSS file for additional custom styles
import NavBar from '../../../components/NavBar/NavBar'; // Import the NavBar component
import Footer from '../../../components/Footer/Footer'; // Import the Footer component

const ProfileDetails = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        nic: '',
        email: '',
        contactNumber: '',
        country: '',
        city: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar /> {/* Add the NavBar component */}

            <div className="flex-grow flex flex-col lg:flex-row p-5 gap-5">
                {/* Left Section */}
                <div className="lg:w-1/4 flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
                        <img src="profile_image_url" alt="Profile" className="w-full h-full object-cover" />
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-2">Lisa Susan</h2>
                        <p className="text-xs text-gray-500 mb-1">Sri Lanka</p>
                        <p className="text-gray-600 mb-1">+94 685 254 238</p>
                        <p className="text-gray-600 mb-1">NIC: 2000568924158</p>
                        <p className="text-blue-600 mb-4">lisaSus@gmail.com</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Update</button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-3/4 p-5 bg-white shadow-lg rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Profile Information</h3>
                    <div className="flex mb-4 justify-center">
                    <div className="flex flex-col">
    <div className="flex w-full">
        <button className="w-1/2 py-2 px-4 bg-blue-500 text-white rounded-t-lg rounded-l-lg border-r border-gray-300">Personal Details</button>
        <button className="w-1/2 py-2 px-4 bg-gray-200 text-gray-800 rounded-t-lg rounded-r-lg">Security</button>
    </div>
</div>

                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                    <option value="">Select Your Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">NIC</label>
                                <input type="text" name="nic" placeholder="Enter NIC Number" value={formData.nic} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                                <input type="text" name="contactNumber" placeholder="Enter Contact Number" value={formData.contactNumber} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Country</label>
                                <select name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                    <option value="">Select Your Country</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
                                <input type="text" name="address" placeholder="Enter Permanent Address" value={formData.address} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="flex gap-4 justify-end mt-4">
                            <button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Save</button>
                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer /> {/* Add the Footer component */}
        </div>
    );
};

export default ProfileDetails;
