export type PropsType = {
    fe_id: string;
    props: {
      title: string;
      value?: string;
      options: {
        value: string;
        text: string;
      }[];
      isVertical: boolean;
    };
  };