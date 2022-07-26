import { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout/Layout"
import {fetchPopularData} from '../apis/index'
import { GlobalStateContext } from '../components/providers/GlobalStateProvider'

export default function Top() {
	const [data, setData] = useState(null);
	useEffect(()=>{
		fetchPopularData().then((data)=>{
			setData(data);
			console.log('useEffect');
			console.log(data);
		})
	},[])

	const contectValue = useContext(GlobalStateContext);
	// console.log(contectValue);

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
