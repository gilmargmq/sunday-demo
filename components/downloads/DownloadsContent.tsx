import { FC } from "react";

const DownloadsContent: FC = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-row lg:space-x-20 items-center justify-center p-10">
            <div className="w-full lg:w-1/2 text-5xl text-center lg:text-end font-semibold">
                TÍTULO
            </div>
            <div className="w-full lg:w-1/2 text-justify p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nibh nisi. Nunc aliquam ullamcorper turpis. Vestibulum id mattis odio, eu placerat nisi. Phasellus iaculis turpis ac suscipit auctor. Pellentesque mauris lorem, cursus et condimentum quis, varius at lacus. Duis efficitur diam et posuere rhoncus. Etiam et elit rutrum, ornare tellus nec, molestie nisi. Ut venenatis interdum ante nec rhoncus. Maecenas molestie diam id ligula lobortis, eget facilisis ante egestas. Ut dapibus pharetra leo, a sollicitudin mi commodo a. Fusce sit amet ornare odio. Sed id dapibus dolor. Donec sodales eget tortor nec lobortis. Ut consequat odio non molestie accumsan.
            </div>
        </div>
    );
}

export default DownloadsContent