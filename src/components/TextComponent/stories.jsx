import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Numquam incidunt ea qui officiis
    doloremque beatae vel! Veritatis dolorem quo in provident
    venial dolor, inventore quidem nesciunt repellendus numquam
    illum? Ad.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
