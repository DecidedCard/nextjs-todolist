import Image from "next/image";
import todoImage from "@/assets/todoListImage.jpg";

export default function Home() {
  return (
    <div className="flex  mt-12 mx-auto p-4 max-w-7xl min-w-max">
      <div className="mt-8 mr-auto">
        <h2 className="text-2xl font-bold animate-bounce">
          Next.js로 만든 TodoList입니다.
        </h2>
        <div className="mt-5">
          <p>이번과제는 Next.js를 활용해서 TodoList를 만들었습니다.</p>
          <p className="max-w-lg text-pretty">
            Route Handler를 구현 하고, Next.js에 있는 4가지 방식의 렌더링 방식이
            구현되어있습니다.
          </p>
          <p className="max-w-lg text-pretty">
            이번에 Route Handler를 사용을 해보면서 생각보다 백엔드는 더 어렵고
            저는 구현하기 귀찮다는 생각이 들었던 거 같습니다.
          </p>
          <p className="max-w-lg text-pretty">
            그래도 나름대로 구현할 수 있는대로 구현하였고, 생각보다 괜찮게
            구현한거 같아서 만족하는 거 같습니다. 이번과제 끝나고 해설해주시면
            바로 또 만족스럽지 않겠지만요.
          </p>
        </div>
      </div>
      <Image
        src={todoImage}
        alt="todo이미지 입니다."
        className="ml-auto -z-20 w-96"
      />
    </div>
  );
}
