module.exports = [
  {
    url: "/api/answer",
    method: "post",
    response: () => {
      return {
        errno: 200,
        //     data: [
        //       {
        //         id: "1",
        //         questionId: "1",
        //         answer: "1",
        //       },
        //       {
        //         id: "2",
        //         questionId: "2",
        //         answer: "2",
        //       },
        //     ],
      };
    },
  },
];
