import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        impedit fugiat, minima explicabo laudantium commodi ea ipsa nulla vero!
        Eligendi voluptatem accusamus adipisci aperiam rerum veniam vero, ipsa
        nostrum esse.
      </p>
      <GoTop {...args} />
    </div>
  );
};
