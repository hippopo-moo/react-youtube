import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout"
import {fetchPopularData} from '../apis/index'

export default function Top() {
	const [data, setData] = useState(null);
	useEffect(()=>{
		fetchPopularData().then((data)=>{
			setData(data);
			console.log('useEffect');
			console.log(data);
		})
	},[])

	return (
			<Layout>
				TOPページ
					<main>
						<form action="" method="get">
								<input type="text" name="searchword" id="searchword" placeholder="検索ワードを入力"/>
								<button type="submit">検索</button>
						</form>
					</main>
			</Layout>
	)
}
