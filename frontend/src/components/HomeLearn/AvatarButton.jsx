
import Link from "next/link";
import Image from 'next/image';

export default function AvatarButton() {

  return (
    <Link href="/?ia=true">
            <Image 
      src="/assets/avatar_quiz.png" 
      alt="Avatar" 
      className="fixed bottom-4 right-4 w-12 h-12 cursor-pointer"  
      width={50} 
      height={50}  
    />
    </Link>

  );
}