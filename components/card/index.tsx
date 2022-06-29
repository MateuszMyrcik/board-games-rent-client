import YoutubeEmbed from "../youtube-embed";

interface ICardProps {
  embedId: string;
}

const Card: React.FC<ICardProps> = ({ embedId }) => {
  return (
    <a href="" className="block overflow-hidden rounded-2xl">
      <YoutubeEmbed embedId={embedId} />
      <div className="p-4 bg-gray-900">
        <p className="text-xs text-gray-500">website.com</p>

        <h5 className="text-sm text-white">
          Lorem ipsum dolor sit amet consectetur
        </h5>

        <p className="mt-1 text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis
          aliquid accusamus? Sint, sequi voluptas.
        </p>
      </div>
    </a>
  );
};

export default Card;
