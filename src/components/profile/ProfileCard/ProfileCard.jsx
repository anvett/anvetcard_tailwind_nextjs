import Image from 'next/image';

const ProfileCard = ({ profile }) => {
  return (
    <div className="flex justify-center p-5 w-full">
      <div className="card w-full max-w-sm  shadow-xl text-center sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <figure className="px-10 pt-10 bg-transparent">
          <Image src={profile.image} alt="Profile picture" width={300} height={300} className="rounded-full mb-spacing-2" />
        </figure>
        <div className="card-body bg-trasparent ">
          <h2 className="section-title text-light">{profile.name}</h2>
          <h4 className="section-subtitle text-light">{profile.title}</h4>
          <p className='text-size-1 text'>{profile.description} </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn main-button">Conectar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
