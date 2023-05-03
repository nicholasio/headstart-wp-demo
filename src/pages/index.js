import {
	addHookData,
	fetchHookData,
	handleError,
	useAppSettings,
	usePost,
} from '@10up/headless-next';
import { resolveBatch } from '../utils/promises';

const Homepage = () => {
	const { data, loading } = usePost({ slug: 'front-page', postType: 'page' });

	if (loading) {
		return 'Loading...';
	}

	return <h1>{data.post.title.rendered}</h1>;
};

export default Homepage;

export async function getStaticProps(ctx) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePost.fetcher(), ctx, {
					params: { slug: 'front-page', postType: 'page' },
				}),
			},
			{
				func: fetchHookData(useAppSettings.fetcher(), ctx),
				throw: false,
			},
		]);

		return addHookData(settledPromises, {});
	} catch (e) {
		return handleError(e);
	}
}
