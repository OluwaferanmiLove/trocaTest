interface mockMessage {
  date: string;
  chat: chat[];
};

interface chat {
  image?: string;
  message: string;
  time: string;
  isUserMessage: boolean;
}

const mockChat: mockMessage[] = [
  {
    date: 'May 25, 2022',
    chat: [
      {
        image: 'https://randomuser.me/api/portraits/women/59.jpg',
        message: 'Hi, Good Evening',
        time: '03:13pm',
        isUserMessage: false,
      },
      {
        message: 'How can I help you?',
        time: '03:38pm',
        isUserMessage: true,
      },
      {
        image: 'https://randomuser.me/api/portraits/women/59.jpg',
        message: 'I will like to get a sweatshirt. How much does it go for',
        time: '03:40pm',
        isUserMessage: false,
      },
    ]
  }
]