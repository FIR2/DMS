import React from 'react';
import PlsArticle from '@/components/PlsArticle'

const Article = () => {
  const cards = [
    {
      imageUrl: '/images/Rectangle 35.png',
      date: 'November 29, 2023',
      title: 'Lorem ipsum dolor sit amet Diam amet nunc etiam ',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Risus ornare cras sed hendrerit scelerisque tempus cursus vitae. Consequat varius massa.',
    },
    {
        imageUrl: '/images/Rectangle 34.png',
        date: 'November 29, 2023',
        title: 'Lorem ipsum dolor sit amet Diam amet nunc etiam ',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Risus ornare cras sed hendrerit scelerisque tempus cursus vitae. Consequat varius massa .',
      },
    {
      imageUrl: '/images/Rectangle 35.png',
      date: 'February 11, 2024',
      title: 'Example Post 2',
      paragraph: 'Phasellus auctor mattis massa, et malesuada nibh consequat nec. Sed nec sem id mauris fermentum euismod.',
    },
    {
      imageUrl: '/images/Rectangle 34.png',
      date: 'February 12, 2024',
      title: 'Example Post 3',
      paragraph: 'Integer eget nulla a metus tincidunt convallis. Donec in elit ullamcorper, rutrum nisi ut, dictum dolor.',
    },
    {
      imageUrl: '/images/Rectangle 35.png',
      date: 'February 13, 2024',
      title: 'Example Post 4',
      paragraph: 'Fusce vitae magna felis. Vivamus et ante arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <PlsArticle
          key={index}
          imageUrl={card.imageUrl}
          date={card.date}
          title={card.title}
          paragraph={card.paragraph}
        />
      ))}
    </div>
  );
};

// container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
export default Article;
