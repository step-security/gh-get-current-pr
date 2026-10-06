import type {GitHub} from '@actions/github/lib/utils'

type ListPRsResult = Awaited<
  ReturnType<
    InstanceType<
      typeof GitHub
    >['rest']['repos']['listPullRequestsAssociatedWithCommit']
  >
>
export type PR = ListPRsResult['data'][number]
