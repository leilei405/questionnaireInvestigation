
export type PropsType = {
    fe_id: string;
    props: {
      title: string;
      isVertical: boolean;
      list: Array<{
        value: string;
        text: string;
        checked: boolean;
      }>;
    };
  };