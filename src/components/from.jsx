import Button from "./button";

function Form() {
  return (
    <form className="flex flex-col">
      <div className="relative w-full flex flex-col">
        <textarea
          className="xs:p-2 lg:mt-3 lg:mb-3 sm:mt-2 sm:mb-2 lg:border-[2px] xs:border-[1px] xs:border-[#D4D4D8] rounded-lg outline-none md:px-2 sm:px-1 sm:py-1 lg:text-[18px] md:text-[16px] sm:text-[14px]"
          rows="8"
          placeholder="Type or paste your topic here"
        ></textarea>
        <div className="absolute xs:bottom-1 lg:bottom-5 sm:bottom-3 left-2 flex items-start justify-between w-full">
          <span className="flex mr-6 items-center sm:text-lg xs:text-sm text-[#D0D0D0]">
            0/50
          </span>
        </div>
      </div>

      <Button className="bg-[#57C49F] w-full text-white sm:mt-1 xs:mt-3">
        Generate Quizz
      </Button>
    </form>
  );
}

export default Form;
