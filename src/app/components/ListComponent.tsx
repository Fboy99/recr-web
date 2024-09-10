import React from 'react';
import { FaPassport, FaHome, FaMoneyBillWave, FaBriefcase, FaClock } from 'react-icons/fa'; 
import ListItem from './ListItem';

const List = () => {
  return (
    <div>
      <ListItem icon={<FaPassport />} text="Passport" />
      <ListItem icon={<FaHome />} text="Home" />
      <ListItem icon={<FaMoneyBillWave />} text="Money" />
      <ListItem icon={<FaBriefcase />} text="Briefcase" />
      <ListItem icon={<FaClock />} text="Clock" />
    </div>
  );
};

export default List;