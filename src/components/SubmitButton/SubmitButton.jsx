export const SubmitButton = ({ onSubmit, value }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      disabled={!value}
      placeholder="дд.мм.рррр"
      className="ml-5 text-white bg-cyan-800 hover:bg-cyan-950 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-cyan-950 dark:hover:bg-cyan-900 dark:focus:ring-cyan-950 disabled:bg-cyan-900"
    >
      Розрахувати
    </button>
  );
};
