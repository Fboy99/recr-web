import React from 'react';

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="mr-4">
        {icon}
      </div>
      <div className="text-gray-700">
        {text}
      </div>
    </div>
  );
}

export default ListItem;
