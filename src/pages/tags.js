import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import styled from 'styled-components'

import Layout from '../components/layout/Layout'
import SEO from '../components/layout/seo'

const Title = styled.h2`
	text-align: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	padding-bottom: 0;
	border-bottom: 0;
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 2.5rem;
`

const TagList = styled.div`
	.ant-tag {
		cursor: pointer;
	}
`

export default function TagsPage({ data, pageContext, location }) {
	const group = data.allMarkdownRemark.group

	function getColor(count) {
		if (count < 5) return 'purple'
		else if (count < 10) return 'blue'
		else if (count < 20) return 'green'
		else if (count < 30) return 'orange'
		else return 'magenta'
	}

	return (
		<Layout location={location}>
			<SEO title="Tags" />
			<Title>Tags</Title>
			<TagList>
				{group.map(tag => (
					<Link
						key={tag.fieldValue}
						to={`/tags/${kebabCase(tag.fieldValue)}/pages/1`}
					>
						{/* <Tag color={getColor(tag.totalCount)}>
							{tag.fieldValue} ({tag.totalCount})
						</Tag> */}
					</Link>
				))}
			</TagList>
		</Layout>
	)
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(limit: 2000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`
