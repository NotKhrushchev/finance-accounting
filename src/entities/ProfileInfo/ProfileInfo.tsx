export const ProfileInfo = () => {
    const username = 'Никита';

    return (
        <div className="flex text-gray-500 text-[12px] font-bold gap-1">
            <p>PROFILE:</p>
            <p>{username}</p>
        </div>
    );
};
