# Radiant-v2 Subgraph

Subgraph for Radiant-v2 on Arbitrum-goerli

### Subgraph Status

| network     | subgraph |
| ----------  | :------: | 
| arb-goerli  | https://thegraph.com/hosted-service/subgraph/sunlightluck/radiantgraph |  



### Setup & Deploy

````
# prepare constants and subgraph.yaml
$ yarn prepare:{network}

# generate Assembly Script typings
$ yarn codegen:{network}

# compile and build files
$ yarn build:{network}

# authenticate api key
$ yarn auth

# deploy subgraph
$ yarn deploy:{network}
````

### Setting up local node (for development)
1. Install docker on local machine https://docs.docker.com/get-docker/)
2. Run `yarn start:node` 
3. Build subgraph: `yarn codegen && yarn build`
4. Create local subgraph: `yarn create-local`
5. Deploy to local node: `yarn deploy-local`
6. Subgraph endpoint available at http://localhost:8000/subgraphs/name/sunlightluck/radiantgraph
7. To open indexer logs: `docker logs radiant_indexer -f 2>&1 | grep --line-buffered -i -E --color "WORD_TO_FILTER"`
8. To stop the running containers: `docker rm -f postgres ipfs radiant_indexer`
