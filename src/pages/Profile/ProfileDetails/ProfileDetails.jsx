import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import the hook to use translation

const ProfileDetails = () => {
  const { t } = useTranslation(); // Translation hook
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    nic: "",
    email: "",
    contactNumber: "",
    country: "",
    city: "",
    address: "",
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
    <form className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.fname")}
          </label>
          <input
            type="text"
            name="firstName"
            placeholder={t("profileDetails.placeholders.firstName")}
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.lname")}
          </label>
          <input
            type="text"
            name="lastName"
            placeholder={t("profileDetails.placeholders.lastName")}
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.gender")}
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">{t("profileDetails.select-gender")}</option>
            <option value="male">{t("profileDetails.male")}</option>
            <option value="female">{t("profileDetails.female")}</option>
            <option value="other">{t("profileDetails.other")}</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.dob")}
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.nic")}
          </label>
          <input
            type="text"
            name="nic"
            placeholder={t("profileDetails.placeholders.nic")}
            value={formData.nic}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.email")}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t("profileDetails.placeholders.email")}
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.contact")}
          </label>
          <input
            type="text"
            name="contactNumber"
            placeholder={t("profileDetails.placeholders.contact")}
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.country")}
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">{t("profileDetails.selectCountry")}</option>
            {/* Add options here */}
          </select>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.city")}
          </label>
          <input
            type="text"
            name="city"
            placeholder={t("profileDetails.placeholders.city")}
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            {t("profileDetails.address")}
          </label>
          <input
            type="text"
            name="address"
            placeholder={t("profileDetails.placeholders.address")}
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-end mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {t("profileDetails.save")}
        </button>
      </div>
    </form>
  );
};

export default ProfileDetails;
