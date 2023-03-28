import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'

import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'
import { QueryProfileMeQuery } from 'graphql/types/schema'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { FormProfileProps } from 'components/FormProfile/types'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMeQuery>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me.username, email: data.me.email }
  }
}
