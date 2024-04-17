import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <select>
            <option value="ko">KOR</option>
            <option value="en">ENG</option>
          </select>
          <Image
            src="http://www.monami.com/images/common/sns_facebook.gif"
            width={25}
            height={25}
            alt="facebook"
          />
          <Image
            src="http://www.monami.com/images/common/sns_insta.gif"
            width={25}
            height={25}
            alt="youtube"
          />
          <span>
            <Link href={""}>HOME</Link>|<Link href={""}>SITE MAP</Link>|
            <Link href={""}>CONTACT US</Link>
          </span>
        </div>
        <hr />
        <div>
          <Link href={"/"}>
            <Image
              src="http://www.monami.com/images/common/logo.jpg"
              width={162}
              height={89}
              alt="monami"
            />
          </Link>
          <div>
            <Link href={"/"}>모나미 소개</Link>
            <Link href={"/"}>모나미 제품</Link>
            <Link href={"/"}>NEWS & VIDEO</Link>
            <Link href={"/"}>모나미 미술대회</Link>
            <Link href={"/"}>고객지원</Link>
            <Link href={"/"}>기업 구매 / 개발</Link>
          </div>
          <div>
            <Image
              src="http://www.monami.com/images/common/btn_search.gif"
              width={19}
              height={18}
              alt="search"
            />
            <span>
              <div />
              <div />
              <div />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
