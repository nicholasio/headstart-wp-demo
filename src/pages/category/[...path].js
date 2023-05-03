import {
	addHookData,
	fetchHookData,
	handleError,
	useAppSettings,
	usePosts,
} from '@10up/headless-next';
import { Link } from '../../components/Link';
import { Pagination } from '../../components/Pagination';
import { resolveBatch } from '../../utils/promises';

const CategoryPage = () => {
	const { data } = usePosts({ taxonomy: 'category' });

	return (
		<>
			<h1>Category Page: {data.queriedObject.term.name}</h1>
			<ul>
				{data.posts.map((post) => (
					<li key={post.id}>
						<Link href={post.link}>{post.title.rendered}</Link>
					</li>
				))}
			</ul>
			<Pagination pageInfo={data.pageInfo} />
		</>
	);
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePosts.fetcher(), ctx, {
					params: { taxonomy: 'category' },
				}),
			},
			{ func: fetchHookData(useAppSettings.fetcher(), ctx), throw: false },
		]);

		return addHookData(settledPromises, {});
	} catch (e) {
		return handleError(e, ctx);
	}
}
