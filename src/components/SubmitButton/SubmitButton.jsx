export const SubmitButton = ({ onSubmit, value }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      disabled={!value}
      placeholder="дд.мм.рррр"
      className="ml-5 text-white bg-neutral-500 hover:bg-neutral-600 focus:ring-4 focus:outline-none focus:bg-neutral-600 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 disabled:bg-neutral-500"
    >
      Расчитать
    </button>
  );
};
