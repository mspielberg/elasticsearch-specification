/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import {
  QueryRuleType,
  QueryRuleCriteria,
  QueryRuleActions
} from '../_types/QueryRuleset'

/**
 * Creates or updates a query rule within a query ruleset.
 * @rest_spec_name query_rules.put_rule
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the query ruleset containing the rule to be created or updated
     */
    ruleset_id: Id

    /**
     * The unique identifier of the query rule within the specified ruleset to be created or updated
     */
    rule_id: Id
  }
  /**
   * The query rule information
   */
  /** @codegen_name query_rule */
  body: {
    type: QueryRuleType
    criteria: QueryRuleCriteria[]
    actions: QueryRuleActions
  }
}