import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import CardSkill from '../lib/common/CardSkill/CardSkill';
import CardImage from '../lib/common/CardSkill/CardImage';
import CardContent from '../lib/common/CardSkill/CardContent';
import "./card.css"
import ProgressBar from '../lib/common/Progress/Progress';

const meta: Meta<typeof CardSkill> = {
  title: 'Common/CardSkill',
  component: CardSkill,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['card-col', 'card-row'],
      description: 'Choose the Card layout (stacked or side-by-side).',
    },
    position: {
      control: 'select',
      options: ['onImage', 'atEnd'],
      description: 'Position for the action buttons.',
    },
    buttons: {
      control: 'object',
      description: 'Array of buttons to display on image hover or at the end.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardSkill>;

const sampleImage = 'https://picsum.photos/300/200';

const defaultButtons = [
  { label: 'Preview', onClick: () => console.log('Preview clicked') },
  { label: 'Resume', onClick: () => console.log('Resume clicked') },
  { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked') },
];

export const ColumnLayoutWithButtonsOnImage: Story = {
  args: {
    layout: 'card-col',
    position: 'onImage',
    buttons: [
      { label: 'Preview', onClick: () => console.log('Preview clicked'), variant: 'primary', size: 'lg' },
      { label: 'Resume', onClick: () => console.log('Resume clicked'), variant: 'secondary', size: 'md' },
      { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked'), variant: 'outline', size: 'md' },
    ],
    children: (
      <>
        <CardImage src={sampleImage} alt="Sample Image" />
        <CardContent>
          <h3>Column Layout with Buttons on Image</h3>
          <p>This card displays buttons on the image when hovered.</p>
        </CardContent>
      </>
    ),
  },
};

// export const RowLayoutWithButtonsOnImage: Story = {
//   args: {
//     layout: 'card-row',
//     position: 'onImage',
//     src: sampleImage,
//     title: "Sample Image",
//     buttons: [
//       { label: 'Preview', onClick: () => console.log('Preview clicked'), variant: 'primary', size: 'md' },
//       { label: 'Resume', onClick: () => console.log('Resume clicked'), variant: 'secondary', size: 'md' },
//       { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked'), variant: 'outline', size: 'md' },
//     ],
//     children: (
//       <>
//         <CardContent>
//           <h3>Column Layout with Buttons on Image</h3>
//           <p>This card displays buttons on the image when hovered.</p>
//         </CardContent>
//       </>
//     ),
//   },
// };

export const ColLayoutWithButtonsAtEnd: Story = {
  args: {
    layout: 'card-col',
    position: 'atEnd',
    src: sampleImage,
    title: "Sample Image",
    buttons: [
      { label: 'Preview', onClick: () => console.log('Preview clicked'), variant: 'primary', size: 'md' },
      { label: 'Resume', onClick: () => console.log('Resume clicked'), variant: 'secondary', size: 'md' },
      { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked'), variant: 'outline', size: 'md' },
    ],
    children: (
      <>
        <CardContent>
          <h3>Row Layout with Buttons at End</h3>
          <p>This card displays buttons at the end by default.</p>
        </CardContent>
      </>
    ),
  },
};
export const RowLayoutWithButtonsAtEnd: Story = {
  args: {
    layout: 'card-row',
    position: 'atEnd',
    src: sampleImage,
    title: "Sample Image",
    buttons: [
      { label: 'Preview', onClick: () => console.log('Preview clicked'), variant: 'primary', size: 'md' },
      { label: 'Resume', onClick: () => console.log('Resume clicked'), variant: 'secondary', size: 'md' },
      { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked'), variant: 'outline', size: 'md' },
    ],
    children: (
      <>
        <CardContent>
          <h3>Row Layout with Buttons at End</h3>
          <p>This card displays buttons at the end by default.</p>
        </CardContent>
      </>
    ),
  },
};
export const RowLayoutWithoutButtons: Story = {
  args: {
    layout: 'card-row',
    src: sampleImage,
    title: "Sample Image",
    children: (
      <>
        <CardContent>
          <h3>Row Layout with Buttons at End</h3>
          <p>This card displays buttons at the end by default.</p>
        </CardContent>
      </>
    ),
  },
};


export const ColumnWithoutButtons: Story = {
  args: {
    layout: 'card-col',
    children: (
      <>
        <CardImage src={sampleImage} alt="Sample Image" />
        <CardContent>
          <h3>Column Layout + Extra Content</h3>
          <p>Additional text and icons can be included for enhanced details.</p>
          <div className="extra-content">
            <span>🌟 Special Offer Available</span>
          </div>
        </CardContent>
      </>
    ),
  },
};

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
    alert(isBookmarked ? 'Removed from bookmark' : 'Bookmarked');
  };

  return (
    <span
      className="bookmark-icon"
      onClick={handleBookmarkToggle}
      role="img"
      aria-label="Bookmark"
    >
      🔖
    </span>
  );
};

export const CardWithBookmark: Story = {
  args: {
    layout: 'card-col',
    position: 'onImage',
    buttons: [
      { label: 'Preview', onClick: () => console.log('Preview clicked'), variant: 'primary-card', size: 'medium' },
      { label: 'Start Course', onClick: () => console.log('Resume clicked'), variant: 'secondary-card', size: 'medium' },
      // { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked'), variant: 'outline', size: 'md' },
    ],
    width: '286px',
    height: '307px',
    menu: true,
    mediaHeight: 0.55,
    src: "https://zvelo.com/wp-content/uploads/2018/11/anatomy-of-a-full-path-url-hostname-tld-path-protocol.jpg",
    title: "Sample Image",
    children: (
      <CardContent>
        <div className="title-container">
          <h3 className="title">
            Mastering Air Traffic Control Protocols: Enhancing Efficiency and Safety Through
            Mastering Air Traffic Control Protocols: Enhancing Efficiency and Safety Through
            Mastering Air Traffic Control Protocols: Enhancing Efficiency and Safety Through
            Mastering Air Traffic Control Protocols: Enhancing Efficiency and Safety Through
            Mastering Air Traffic Control Protocols: Enhancing Efficiency and Safety Through
            Mastering Air Traffic Control Protocols: Enhancing Efficiency and Safety Through
          </h3>
          <Bookmark />
        </div>
        <p className='card-lesson'>12 Lessons</p>
        <div className='flex justify-between items-center'>
          <div className="content-details">
            <span role="img" aria-label="Clock">🕒</span>
            <p style={{fontSize:"14px"}}>2d's ago</p>
          </div>
          <ProgressBar
            height={4}
            showLabel
            animation
            theme="primary"
            type="bar"
            value={50}
            width={40}>
            </ProgressBar>
        </div>
      </CardContent>
    ),
  },
};

export const CardWithheaderAndVideo: Story = {
  args: {
    layout: 'card-col',
    position: 'onImage',
    buttons: [
      { label: 'Preview', onClick: () => console.log('Preview clicked'), variant: 'primary-card', size: 'medium' },
      { label: 'Start Course', onClick: () => console.log('Resume clicked'), variant: 'secondary-card', size: 'medium' },
      // { label: 'Edit Instance', onClick: () => console.log('Edit Instance clicked'), variant: 'outline', size: 'md' },
    ],
    width: '320px',
    height: '320px',
    menu: true,
    mediaHeight: 0.6,
    src: "https://assets.contentenablers.com/website/videos/modsum/us-import-valuation-overview-course-preview.mp4",
    title: "Sample Image",
    mediaType: "video",
    header: (<div>
      <img width="100px" src="https://assets.contentenablers.com/website/imgs/0be1e900916f4f499fc9e17cea0f1a16.webp"></img>
    </div>),
    children: (
      <CardContent>
        <div style={{ gap: '16px' }} className='flex gap-4'>
          <div className='rounded-full flex justify-center items-center border shrink-0' style={{ flexShrink: 0, width: "30px", height: "30px" }}><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20c0-4 3-6 6-6s6 2 6 6" />
          </svg>
          </div>
          <div>
            <div className='name'>Marvin McKinney</div>
            <div className='info'>Finance Controller at Boeing</div>
          </div>
        </div>
      </CardContent>
    ),
  },
};

