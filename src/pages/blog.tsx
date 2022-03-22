import * as React from 'React';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

const BlogPage = ({data} : { data: any}) => {
    return (
        <Layout pageTitle={"Blog Post List"}>
            <ul>
                {
                    data.allFile.nodes.map((node: { name: string | null | undefined; }) => {
                        return(
                            <li key={node.name}>
                                {node.name}
                            </li>
                        );
                    })
                }
            </ul>
        </Layout>
    );
}

export default BlogPage;