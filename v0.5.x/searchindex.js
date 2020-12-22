Search.setIndex({docnames:["discussion/gym-differences","discussion/seeding","discussion/theory","howto/create-environments","howto/create-functions","howto/instances","howto/observation-functions","howto/reward-functions","index","installation","reference/environments","reference/information","reference/instances","reference/observations","reference/rewards","reference/scip-interface","reference/utilities","using-environments"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["discussion/gym-differences.rst","discussion/seeding.rst","discussion/theory.rst","howto/create-environments.rst","howto/create-functions.rst","howto/instances.rst","howto/observation-functions.rst","howto/reward-functions.rst","index.rst","installation.rst","reference/environments.rst","reference/information.rst","reference/instances.rst","reference/observations.rst","reference/rewards.rst","reference/scip-interface.rst","reference/utilities.rst","using-environments.rst"],objects:{"ecole.RandomEngine":{__init__:[16,1,1,""],discard:[16,1,1,""],max_seed:[16,2,1,""],min_seed:[16,2,1,""],seed:[16,1,1,""]},"ecole.environment":{Branching:[10,0,1,""],BranchingDynamics:[10,0,1,""],Configuring:[10,0,1,""],ConfiguringDynamics:[10,0,1,""],Environment:[10,0,1,""]},"ecole.environment.BranchingDynamics":{__init__:[10,1,1,""],reset_dynamics:[10,1,1,""],set_dynamics_random_state:[10,1,1,""],step_dynamics:[10,1,1,""]},"ecole.environment.ConfiguringDynamics":{__init__:[10,1,1,""],reset_dynamics:[10,1,1,""],set_dynamics_random_state:[10,1,1,""],step_dynamics:[10,1,1,""]},"ecole.environment.Environment":{__init__:[10,1,1,""],reset:[10,1,1,""],seed:[10,1,1,""],step:[10,1,1,""]},"ecole.information":{Nothing:[11,0,1,""]},"ecole.information.Nothing":{__init__:[11,1,1,""],before_reset:[11,1,1,""],extract:[11,1,1,""]},"ecole.instance":{CapacitatedFacilityLocationGenerator:[12,0,1,""],CombinatorialAuctionGenerator:[12,0,1,""],IndependentSetGenerator:[12,0,1,""],SetCoverGenerator:[12,0,1,""]},"ecole.instance.CapacitatedFacilityLocationGenerator":{__init__:[12,1,1,""],generate_instance:[12,1,1,""],seed:[12,1,1,""]},"ecole.instance.CombinatorialAuctionGenerator":{__init__:[12,1,1,""],generate_instance:[12,1,1,""],seed:[12,1,1,""]},"ecole.instance.IndependentSetGenerator":{__init__:[12,1,1,""],generate_instance:[12,1,1,""],seed:[12,1,1,""]},"ecole.instance.SetCoverGenerator":{__init__:[12,1,1,""],generate_instance:[12,1,1,""],seed:[12,1,1,""]},"ecole.observation":{Khalil2016:[13,0,1,""],NodeBipartite:[13,0,1,""],NodeBipartiteObs:[13,0,1,""],Nothing:[13,2,1,""],Pseudocosts:[13,0,1,""],StrongBranchingScores:[13,0,1,""]},"ecole.observation.Khalil2016":{__init__:[13,1,1,""],before_reset:[13,1,1,""],extract:[13,1,1,""]},"ecole.observation.NodeBipartite":{__init__:[13,1,1,""],before_reset:[13,1,1,""],extract:[13,1,1,""]},"ecole.observation.NodeBipartiteObs":{ColumnFeatures:[13,0,1,""],RowFeatures:[13,0,1,""],__init__:[13,1,1,""],column_features:[13,1,1,""],edge_features:[13,1,1,""],row_features:[13,1,1,""]},"ecole.observation.NodeBipartiteObs.ColumnFeatures":{__init__:[13,1,1,""],average_incumbent_value:[13,2,1,""],has_lower_bound:[13,2,1,""],has_upper_bound:[13,2,1,""],incumbent_value:[13,2,1,""],is_basis_basic:[13,2,1,""],is_basis_lower:[13,2,1,""],is_basis_upper:[13,2,1,""],is_basis_zero:[13,2,1,""],is_solution_at_lower_bound:[13,2,1,""],is_solution_at_upper_bound:[13,2,1,""],is_type_binary:[13,2,1,""],is_type_continuous:[13,2,1,""],is_type_implicit_integer:[13,2,1,""],is_type_integer:[13,2,1,""],name:[13,1,1,""],normed_reduced_cost:[13,2,1,""],objective:[13,2,1,""],scaled_age:[13,2,1,""],solution_frac:[13,2,1,""],solution_value:[13,2,1,""]},"ecole.observation.NodeBipartiteObs.RowFeatures":{__init__:[13,1,1,""],bias:[13,2,1,""],dual_solution_value:[13,2,1,""],is_tight:[13,2,1,""],name:[13,1,1,""],objective_cosine_similarity:[13,2,1,""],scaled_age:[13,2,1,""]},"ecole.observation.Pseudocosts":{__init__:[13,1,1,""],before_reset:[13,1,1,""],extract:[13,1,1,""]},"ecole.observation.StrongBranchingScores":{__init__:[13,1,1,""],before_reset:[13,1,1,""],extract:[13,1,1,""]},"ecole.reward":{Arithmetic:[14,0,1,""],Constant:[14,0,1,""],IsDone:[14,0,1,""],LpIterations:[14,0,1,""],NNodes:[14,0,1,""],SolvingTime:[14,0,1,""]},"ecole.reward.Arithmetic":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.reward.Constant":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.reward.IsDone":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.reward.LpIterations":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.reward.NNodes":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.reward.SolvingTime":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.scip":{Model:[15,0,1,""]},"ecole.scip.Model":{__init__:[15,1,1,""],as_pyscipopt:[15,1,1,""],copy_orig:[15,1,1,""],disable_cuts:[15,1,1,""],disable_presolve:[15,1,1,""],from_file:[15,1,1,""],from_pyscipopt:[15,1,1,""],get_param:[15,1,1,""],get_params:[15,1,1,""],is_solved:[15,1,1,""],prob_basic:[15,1,1,""],set_param:[15,1,1,""],set_params:[15,1,1,""],solve:[15,1,1,""],write_problem:[15,1,1,""]},"ecole.typing":{Dynamics:[10,0,1,""],InformationFunction:[11,0,1,""],InstanceGenerator:[12,0,1,""],ObservationFunction:[13,0,1,""],RewardFunction:[14,0,1,""]},"ecole.typing.Dynamics":{__init__:[10,1,1,""],reset_dynamics:[10,1,1,""],set_dynamics_random_state:[10,1,1,""],step_dynamics:[10,1,1,""]},"ecole.typing.InformationFunction":{__init__:[11,1,1,""],before_reset:[11,1,1,""],extract:[11,1,1,""]},"ecole.typing.InstanceGenerator":{__init__:[12,1,1,""],generate_instance:[12,1,1,""],seed:[12,1,1,""]},"ecole.typing.ObservationFunction":{__init__:[13,1,1,""],before_reset:[13,1,1,""],extract:[13,1,1,""]},"ecole.typing.RewardFunction":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},ecole:{RandomEngine:[16,0,1,""],seed:[16,3,1,""],spawn_random_engine:[16,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"\u03b1":4,"abstract":[4,17],"boolean":[10,17],"case":[2,5,7,17],"class":[2,3,4,5,10,11,12,13,14,15,16,17],"default":[1,3,6,7,9,10,13,14,17],"final":[0,9,17],"float":[10,12,14,15],"function":[2,3,5,11,12,13,14,17],"import":[0,1,3,4,5,7,8,17],"int":[10,12,13,15,16],"new":[1,5,7,8,9,10,11,12,13,14,16,17],"null":2,"return":[0,2,3,4,5,10,11,12,13,14],"short":1,"static":[0,4,5,9,12,13,15],"super":[3,4,12],"true":[2,3,5,6,10,13,14,17],"while":[0,1,5,8,12,17],And:[5,9],For:[0,3,4,5,6,7,8,9,10,17],IDE:9,Its:2,Not:7,One:[1,3,12],Such:7,That:1,The:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17],Then:[4,9],There:[12,13],These:[5,9,17],Using:[5,6,7,9],With:3,__dynamics__:3,__init__:[3,4,5,10,11,12,13,14,15,16],__iter__:5,__next__:5,a_0:2,a_t:2,aaai:13,abl:[0,4],about:[0,2,10,11,17],abov:5,abs:[4,7],absolut:4,absorb:2,accept:[5,10,17],access:[6,7],accord:6,account:[2,8,10,17],accur:[10,11,12,13,14,15],achiev:7,acm:12,act:8,action:[2,3,6,9,10,13,14,17],action_set:[0,1,2,3,5,8,10,17],action_spac:0,actionset:10,activ:[7,9],actual:[0,2,11,13,14,17],adapt:[4,8],add:0,add_item_prob:12,added:9,adding:12,addit:[2,10,11,12,17],addtion:11,advanc:[16,17],affect:2,affin:12,aforement:2,after:[1,2,11,13,14],afterward:17,again:[0,1,9],agent:[8,10,14,17],aim:[0,4,8],algorithm:[0,6,8,12,13,17],alia:13,all:[0,1,2,5,7,9,10,13,14,17],allow:[2,8,12],alpha:4,also:[0,4,7,13,14,17],altern:[0,5],although:[13,17],alwai:[9,13,14,17],amount:14,analysi:9,analyz:17,ananconda:9,andrea:8,ani:[0,2,3,4,5,6,7,8,9,10,11,12,17],anoth:[5,7,10,17],antoin:8,anyhow:0,anymor:5,anyth:[4,5],anywher:1,api:[2,8],appear:17,append:9,appli:[2,4,7],applic:13,approach:8,approxim:13,arbitrari:[2,12,13],area:7,arg0:[13,14],arg1:14,arg2:14,arg:[2,3,4,10,11,12,13,14,15],argument:[3,10,17],around:3,arrai:13,art:8,artifici:13,as_pyscipopt:[3,4,15],aspect:1,associ:[3,13,14],attach:12,attribut:4,automat:8,avaibl:4,avail:[2,6,7,9],averag:4,average_incumbent_valu:13,avoid:1,awai:3,back:4,bala:12,bandit:6,barabasi_albert:12,bare:[3,10],base:12,becaus:[0,1,5,6,7,9],becom:[5,7],been:[10,14,17],befor:[5,11,13,14,17],before_reset:[4,11,13,14],begin:[4,17],behaviour:[1,3],being:[0,5,17],below:[11,12,13,14],benchmark:[8,17],bengio2020:8,bengio:8,best:2,better:[0,5],between:[1,3,4,7,8,10,13,14],bia:13,bid:12,bidder:12,bistra:13,bodic:13,bone:3,bool:[10,11,12,13,14,15],both:[2,4,7],bound:[0,2,8,13,17],boutro:13,box:17,branch:[0,1,2,4,5,6,8,17],branchingdynam:[3,10],bring:[10,17],brown:12,budget:12,budget_factor:12,build:5,bundl:12,cach:13,call:[0,1,3,4,5,10,11,12,13,14,16,17],can:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17],candid:[8,13,17],canid:13,cannot:[0,10],capabl:12,capac:12,capacitatedfacilitylocationgener:12,challeng:0,chang:[3,5,6,7,9,10,13,17],channel:9,channel_prior:9,charg:17,cheap:13,choic:[2,5,9],choos:5,chose:[0,2,6],cliqu:17,clock:[14,17],cmake_build_typ:9,cnadid:13,code:[0,9],coeffici:[4,12,13],coincid:17,collect:[0,2,10],column:[12,13],column_ema:4,column_featur:[4,13],column_max_ab:4,columnfeatur:13,combin:[7,12],combinatori:[0,8,10,17],combinatorialauctiongener:12,combinegener:5,comfort:5,commerc:12,common:[4,11,17],compact:5,comparison:[8,12],complet:[0,2,5,6,7,13],complex:[0,7],compon:[9,10],compos:[7,10],comput:[0,2,4,7,10,12,13,14,17],concept:4,condit:4,confer:[12,13],config:9,configur:[7,9],configuringdynam:10,consid:[2,4,5,17],consider:0,consist:[2,17],constraint:[5,12,13],construct:[4,5,16,17],constructor:[3,4,6,10,12,13,14,17],construtor:3,consum:[1,5],contain:[5,9,13],continu:2,contraint:13,contrarili:0,contribut:9,control:[0,1,8,10,17],conveni:[2,4,6,9],convers:4,convert:[2,4],copi:[4,10],copy_orig:15,core:[4,13],cornuejol:12,correspond:2,could:[0,4,5,17],count:14,counter:14,cover:5,creat:[1,5,6,7,8,9,10,11,14,16],cummul:0,cumul:[0,2,14],currenlti:9,current:[0,2,4,10,11,13,14,17],custom:[0,3,4,6,7,10,12,17],customiz:10,custot:10,cut:[3,12,17],data:[0,4,5,6,7,8,10,11,13,14],datafunct:[11,13,14],deactiv:3,deal:7,debug:9,decid:[1,2,3,11,13,14,17],decis:[0,3,6,8,10,17],dedic:[7,17],def:[3,4,5],defin:[0,2,3,4,10,11,12,13,14],definit:[9,10],deleg:[6,7],deliv:0,delta_:2,demand:12,densiti:[5,12],depend:[5,17],deploi:9,deriv:[1,16],describ:[4,12,17],design:[0,8],desir:[4,17],despit:8,detail:17,detect:9,determin:[10,12,13,17],determinist:2,dev:9,develop:[8,9],deviat:12,dict:[6,10,11,15],dictionari:[5,17],dictionnari:11,differ:[1,2,3,5,6,7,10,14,16],dilkina:13,direclti:1,directli:[2,3,5,6,7],directori:9,disabl:3,disable_cut:[3,15],disable_presolv:[3,15],discard:16,discuss:[3,5,17],distribut:2,divid:0,doc:3,document:[6,7,9,17],doe:[0,2,3,4,5,9],doing:[0,7,14],done:[1,2,3,4,5,7,8,9,10,11,13,17],dot:2,drive:3,driven:[8,17],dual_solution_valu:13,due:2,dure:[4,10,13,17],dynam:[1,2,10,17],dynamics_arg:10,dynamics_kwarg:10,each:[0,1,2,12,13,17],earlier:9,eas:8,easi:[3,6],easier:[0,4],easili:[0,11],ecol:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],ecole_develop:9,ecole_random_engin:5,edg:[12,13],edge_featur:13,edge_prob:12,effect:[4,11,13,14,17],effici:[0,7,13],either:[0,4,10],electron:12,element:[1,10],elia:13,els:[1,4],ema:4,emphas:0,empow:1,empti:11,encount:[2,9],end:2,engien:16,engin:[1,10,12,16],ensur:[9,10],entir:5,env:[1,3,4,5,6,7,8,9,17],envion:1,environ:[0,2,4,6,7,8,9,11,13,14],environemnt:3,episod:[0,2,3,4,5,10,11,13,14,17],equilval:5,equival:[2,4,13,16],erdos_renyi:12,etc:[5,9,17],european:[8,12],evalu:[0,10],even:[5,7],everi:[0,4,5,10,17],everyth:[3,9],exact:17,exactli:[0,5,17],exampl:[0,2,3,4,5,17],execut:17,exist:[0,3,5,8,11,12,13,14],exp:7,expect:[2,11,12,13,14],expert:[8,13],explain:4,explan:[5,6,7],explicit:9,explicitli:[1,6],exploit:8,explor:[7,8],exponenti:[4,7],expos:8,express:7,exrem:7,extact:13,extend:[0,2],extens:8,extra:[3,10],extract:[0,4,6,7,10,11,13,14,17],extrapol:0,fact:[3,7],factor:12,factori:7,fail:8,fals:[3,10,12,13,14],famili:17,familiar:8,fashion:5,fast:8,featur:[3,4,13],few:5,file:[5,10,17],filepath:15,fill:13,find:[0,2,7,9],finish:[10,17],first:[0,5,17],fit:2,fix:17,flag:[0,3,10,11,13,14,17],flexibl:[3,9],folder:5,follow:[1,2,3,4,5,7,9,12,14,17],forg:9,form:[2,4,17],format:9,formul:[0,2,8,17],forth:4,forward:[3,4,10,14],found:0,fraction:[13,17],freq:17,from:[0,1,2,3,5,7,8,10,11,12,13,14,16,17],from_fil:15,from_pyscipopt:[4,15],full:[3,7,17],fulli:[3,17],further:[0,17],futur:17,gain:10,gen:5,gener:[0,1,2,9,11,13,14],generate_inst:[5,12],generator_a:5,generator_b:5,georg:13,geq:2,get:[0,3,4,7,17],get_param:15,getter:[11,13,14],give:[0,1,12,17],given:[0,3,4,7,10,11,12,13,14,17],global:[1,5,16],gnerat:12,goal:[8,17],good:[5,7],graph:[12,13],graph_typ:12,guarante:2,gxx_linux:9,gym:[8,10],h_t:2,handcraft:8,happen:[10,17],hard:0,has:[0,2,6,7,10,14,17],has_lower_bound:13,has_upper_bound:13,have:[0,2,3,4,5,6,7,11,13,14,16],heavi:4,help:[10,11,12,13,14,15],henc:[0,4],here:[2,4,5,17],heterogen:13,heurist:[8,12,17],high:9,highest:13,highli:8,hint:[11,13,14],histori:2,hold:[4,5],horizon:8,how:[3,4,5,6,7],howev:[0,5],hybrid:13,idea:4,ideal:17,ident:[1,2],iff:2,ignor:[2,17],illustr:5,imit:13,implement:[0,2,4,5,7],implicit:2,imposs:5,improv:0,includ:[1,2,14,17],incumbent_valu:13,inde:17,independentsetgener:12,index:13,indic:[10,11,13,14,17],inequ:17,infinit:[2,5],infint:5,info:[1,5,8,10,17],inform:[0,2,4,9,10,13,14,17],information_funct:10,informationfunct:[10,11],infti:2,inherit:[3,4,11,13,14],init:2,initi:[0,1,2,4,10,11,12,13,14,15,17],inlud:10,inner:17,input:[0,3,4],insid:[8,9],insight:10,insignific:1,inspir:8,instanc:[0,2,4,6,7,8,9,10,14,17],instance_a:5,instance_b:5,instancegener:[1,5,12],instanti:[5,10,17],instead:[0,2],intanc:8,integ:[8,12,13],integr:[12,17],intellig:13,interest:[0,17],interfac:[3,4,8,9],intermedi:0,intern:[4,11,13,14,16],interpret:2,introduc:2,invok:1,is_basis_bas:13,is_basis_low:13,is_basis_upp:13,is_basis_zero:13,is_solution_at_lower_bound:13,is_solution_at_upper_bound:13,is_solv:15,is_tight:13,is_type_binari:13,is_type_continu:13,is_type_implicit_integ:13,is_type_integ:13,isdon:[7,14],islic:5,item:12,iter:[0,5,8,10,12,17],iterat:12,its:[1,4,8,10,17],itself:4,joint:2,journal:[8,12],keep:[1,4,7,11,13,14],kept:10,kevin:12,keyword:5,khalil2016:13,kind:8,know:12,known:[13,17],kwarg:[3,4,10,11,12,13,14,15],kwd:[10,11,12,13,14],lambda:7,larg:3,last:7,later:17,latest:10,latter:1,learn:[0,1,4,5,6,7,8,10,13,14,17],left:[2,3],length:2,let:[0,1,2,3,4,17],leyton:12,librari:8,lift:4,like:[5,17],likewis:7,lim_:2,limit:1,linear:[8,14],linux:9,list:[5,6,7],littl:17,load:17,lodi:8,log:12,logger:12,look:[5,8,17],loop:[5,8,17],lp_iter_reward:7,lpiter:[4,7,8,14],machin:[0,1,8,17],maco:9,made:[2,9],mai:[2,4,10],main:9,make:[0,3,4,5,9,17],maker:2,manag:3,mandatori:0,mani:8,manual:5,mark:12,markov:[3,6,8,10,17],markovian:2,match:[0,17],math:7,mathbb:2,mathcal:2,mathemat:[7,12],mathop:2,matrix:[12,13],matter:0,max:[2,4],max_coef:12,max_n_sub_bid:12,max_se:16,max_valu:12,maximum:[4,10,12],maxsepacut:17,mdp:[0,11,13,14,17],mean:[0,1,4],meaningful:2,meant:[0,2,4],measur:13,mechan:7,mechnism:5,member:13,memori:[2,3],meta:9,metaworld:0,method:[0,1,2,3,4,5,7,10,11,12,13,14,17],methodolog:8,metric:[0,14],mid:2,min_se:16,min_valu:12,minim:7,minimum:12,mix:[8,13],mkern2mu:2,mode:[3,9],model:[0,1,3,4,5,8,10,11,12,13,14,17],modern:0,modifi:5,modul:[5,10],more:[0,3,4,5,7,8,9,17],most:[0,17],motiv:8,move:4,movingscalednodebipartit:4,mtrand:12,multi:0,must:[2,10,12,17],mutipl:7,mutlipl:0,n_bid:12,n_col:[5,8,12],n_cols_rang:5,n_custom:12,n_facil:12,n_item:12,n_node:12,n_row:[5,8,12],n_rows_rang:5,naiv:4,name:[9,13,15],name_valu:15,nan:13,natur:[2,17],necessari:[1,9,10,11,13,14,17],necessarili:2,need:[0,1,3,4,5,6,7,9,10],negat:7,nemhaus:13,never:[0,5,17],nevertheless:2,newli:10,next:[0,2,5,6,8,10,12,13,17],node:[0,2,3,12,14],nodebipartit:[0,4,6,8,13],nodebipartiteob:[6,13],non:[2,8,13,17],none:[0,2,3,4,6,10,11,12,13,14,15,16,17],nonefunct:13,nonetheless:2,normed_reduced_cost:13,note:[5,7,9,12],noth:[0,4,6,14],notic:4,now:[2,3],number:[0,1,2,3,4,5,7,10,12,14,16],numer:17,numpi:[4,12],o_0:2,o_1:2,o_t:2,obei:2,object:[0,6,7,10,11,12,13,14,15],objective_cosine_similar:13,objserv:13,obs:[1,4,6],obs_func:6,obscur:5,observ:[1,3,4,5,7,8,10,17],observatiofunct:3,observation_funct:[3,6,8,10],observationfunct:[0,2,3,4,6,10,11,13],obtain:[2,13,14,17],occupi:2,off:3,offer:8,offici:4,offset:[10,14,17],often:0,old:9,omega:2,omit:17,onc:[10,11,13,14,17],one:[0,1,2,3,4,5,6,7,9,10,12,13,17],ones:[2,9,17],onli:[0,2,5,9,11,12,13,14,17],openai:[8,10],oper:[7,8,12,14,16],operatornam:2,opposit:7,optim:[0,2,8,10,12,13,17],option:[2,9,10,13,17],orchestr:[3,10],order:[2,8,10,17],origin:4,other:[3,4,5,7,9,10,13],other_nam:6,otherwis:14,out:[9,17],outcom:1,outer:17,output:4,over:[0,5,12],overfit:1,overrid:[3,9],overriden:17,own:4,packag:9,paramet:[1,4,6,7,10,11,12,13,14],parameter:17,parent:[3,4],part:[0,2,10],partial:[6,10,17],particular:[1,17],pass:[0,5,6,7,9,10,11,12,13,14],path:[1,6,7,10,17],pattern:11,pearson:12,per:[2,11,12,13,14],perfectli:4,perfom:5,perform:[0,17],perp:2,phase:17,pick:[5,8],pierr:13,plan:9,plane:[3,12,17],plant:12,plethora:8,point:10,polici:[0,2,8,17],pomdp:10,possibl:[3,4,5,7,10],power:[0,7],practic:[0,2,5,13,17],pratic:4,praticionn:8,precis:8,precomput:13,predefin:0,preprocess:17,present:[11,13,14],preserv:[2,17],presolv:[0,3,10,17],prevent:0,previou:[3,4,11,13,14,17],price:12,prior:0,privat:12,prob_bas:15,probabl:[2,4,12],problem:[0,1,4,6,7,8,9,10,12,13,14,17],procedur:0,proceed:12,process:[3,6,7,10,14,17],prod_:2,produc:[2,5],program:[8,12,13,14,17],programat:17,promis:8,proper:4,properti:13,protocol:8,prototyp:8,prouvost:8,provid:[0,1,8,12,17],proxi:14,pseudo:[13,16],pseudo_candid:[10,13,17],psuedo:13,purpos:0,py_random_engin:5,py_scip_paramset:3,pypi:9,pyscipopt:[3,9,17],pyscipopt_model:3,python:[4,5,7,9,11,13,14],qualiti:[9,13],quantiti:2,r_0:2,r_t:2,radnom:5,randint:5,random:[1,4,10,12],random_engin:[5,10,12],randomeengin:1,randomengin:[1,5,10,12,16],randomli:5,randomst:12,rang:[1,5,8,12,17],rather:[0,4,14],ratio:12,raw:10,reach:17,read:10,reader:8,real:10,realli:[0,1,6],reason:[0,4],receiv:3,reciev:[3,6,7],recommend:9,refer:[6,7,8,13,17],regular:2,reinforc:[0,8,10,17],reiniti:16,reintial:4,rel:12,relat:[2,13],relationship:8,relax:12,relev:[11,13,14],reli:8,reliabl:[1,13],repeat:17,repeatedli:17,replac:[4,8],repons:[11,13,14],repositori:9,repres:[2,4,10,13,17],reproduc:8,repsons:[11,13],requir:[0,8,9,17],resal:12,resale_factor:12,research:[1,7,8,12],reset:[1,2,4,5,6,7,8,10,11,13,14],reset_dynam:[2,3,10,11,13,14],resolv:9,resort:7,respect:2,respons:[3,6,7,14,17],restrict:2,result:[2,4,14,16],reus:[0,4],reward:[1,2,3,4,5,8,10,17],reward_funcit:4,reward_funct:[4,7,8,10],reward_offset:[0,1,5,8,10,17],rewardfunct:[0,2,3,4,7,10,11,14],right:[2,11,13,14],rlap:2,rng:12,root:[0,2,3],round:7,row:[12,13],row_ema:4,row_featur:[4,13],row_max_ab:4,rowfeatur:13,run:[1,2],s_0:2,s_1:2,s_t:2,safe:[2,8,11,13,14],same:[0,1,4,5,17],sampl:[10,12,17],scalar:7,scale:4,scaled_ag:13,scalednodebipartit:4,scaler:4,scheme:12,scikit:4,scip:[2,3,4,5,8,10,11,12,13,14,17],scip_param:[10,17],scipopt:9,scipsetheurist:17,scipsetpresolv:3,scipsetsepar:3,scratch:3,section:[4,12,17],see:[5,6,7,10,11,12,13,14,15,17],seed:[3,5,10,12,16],seen:2,select:17,self:[3,4,5,10,11,12,13,14,15,16],separ:17,sequenti:17,seri:10,set:[1,2,3,5,6,9,10,13,17],set_dynamics_random_st:[1,10],set_param:15,set_task:0,setcovergener:[5,8,12],setpresolv:3,setsepar:3,sever:17,share:[3,4],shoham:12,should:[2,5,12,17],show:[3,4],showcas:[4,17],shown:4,side:[4,11,13,14],signal:17,signatur:[10,11,12,13,14,15],sim:2,similar:[0,3,4,7,8,10,17],similarili:[1,3,6,7],similarli:2,simpl:17,simplebranch:3,simplebranchingdynam:3,simpli:[0,2,4,17],simplic:[8,17],sinc:[10,14,17],singl:[0,14,17],smoother:4,snippet:1,solut:[0,17],solution_frac:13,solution_valu:13,solv:[0,2,8,10,15,17],solver:[0,1,2,3,4,6,7,8,10,11,13,14,17],solvingtim:14,some:[0,3,4,5,10,13,17],some_nam:6,song:13,sourc:[1,10,11,12,13,14,16],space:2,spawn_random_engin:[1,5,16],speak:4,specif:[2,10,11,14,17],specifi:[2,12],spend:2,spent:[14,17],sridharan:12,stabl:7,standard:8,star:2,start:[1,3,9,10,11,13,14,17],startedr:10,state:[1,2,3,4,6,8,10,11,12,13,14,16,17],statist:[8,17],step:[0,1,2,5,7,8,10,17],step_dynam:[2,3,10],stochast:2,stochastic_lpiter:4,stochasticreward:4,stochaticreward:4,store:[3,4],str:[10,11,12,14,15],strategi:[13,17],strict:2,string:11,strongbranchingscor:13,structur:[5,11,13,14],studi:12,sub:12,subgradi:12,subsequ:17,subset:[10,17],substitut:12,subtl:8,subtyp:[11,13,14],success:[16,17],suffici:17,suit:12,sum:[0,10,14],sum_:2,supplementari:0,support:[11,13,14],suppos:10,susbtanci:3,system:[9,14],tackl:10,tailor:17,take:[0,2,3,4,6,10,13,17],taken:[0,10,14],task:[0,2,5,17],tau:2,techniqu:5,termin:[2,10,11,13,14,17],test:[9,12],text:2,textit:2,than:[0,4,9],thei:[0,5,12,17],them:[3,5,6],theoret:0,theori:17,theortic:17,therebi:8,therefor:[2,5],therfor:0,thi:[0,1,2,3,4,5,7,9,10,11,12,13,14,17],thirtieth:13,thizi:12,those:[2,8],though:[2,17],through:[3,10],thu:17,time:[0,2,9,10,16,17],togeth:2,too:9,tool:[0,9],topic:3,total:[2,14],tour:8,toward:12,track:[11,13,14],train:[0,5,17],trajectori:[2,10,17],tran:2,transit:[0,2,3,10,11,13,14],translat:2,trivial:8,truli:1,tupl:[2,6,10],tweak:0,two:[16,17],type:[0,3,5,7,9,10,11,12,13,14,15],typic:[0,5,7,8,10],uncommon:0,uncondition:4,underbrac:2,underli:[1,2,10,17],underset:2,understand:17,understood:5,union:[10,15],univers:12,unlik:17,unrol:2,unseen:[0,17],until:[10,17],upcom:10,updat:[4,14],use:[1,3,4,5,6,7,8,9,10,11,14],used:[0,4,6,7,9,10,11,12,13,14,17],useful:[5,10,14],user:[0,2,3,4,5,6,7,10,11,12,13,14,17],using:[0,4,5,8,9,12,14,16,17],usual:[11,13,14,17],utlil:10,val:[5,16],valid:[0,2,4,5,7,11,13,14,17],valu:[4,10,12,14,15,16,17],value_devi:12,varaibl:13,vari:17,variabl:[0,2,8,13,17],variablesizesetcovergener:5,vector:[4,13],veri:[3,4,5,7,17],voer:5,wai:[0,1,17],wait:14,wall:14,want:[3,5,7],wast:5,well:[6,7,8],were:14,wether:[10,11,13,14],what:[0,1,3,4,5,10,12],when:[0,1,4,5,6,7,10,12,14,17],where:[0,2,11,13,14,17],wherea:0,whether:17,which:[1,2,3,4,5,8,10,12,13,17],whole:[2,6,9],whose:[2,5,10],why:[0,8],without:[0,3,4,10,17],word:3,work:7,would:[0,5,7,17],wrap:[2,3,4,6],wrapper:3,write:[0,5],write_problem:[5,15],written:2,xtensor:[10,13],yaml:9,yet:10,yield:[2,5],yoav:12,yoshua:8,you:[4,9],your:9,zero:13},titles:["Differences with OpenAi Gym","Seeding","Ecole Theoretical Model","Create New Environments","Create New Functions","Generate Problem Instances","Use Observation Functions","Use Reward Functions","Introduction","Installation","Environments","Informations","Instance Generators","Observations","Rewards","SCIP Interface","Utilities","Using Environments"],titleterms:{"function":[4,6,7],"new":[3,4],One:4,Use:[6,7],Using:[4,17],With:5,action:0,adapt:5,arithmet:[7,14],auction:12,bipartit:13,branch:[10,13],build:9,capacit:12,chang:0,cmake:9,combin:5,combinatori:12,compil:9,compon:2,conda:9,configur:10,constant:14,control:2,cover:12,creat:[3,4],decis:2,depend:9,differ:0,done:[0,14],dynam:3,ecol:2,environ:[1,3,5,10,17],episod:1,exsit:4,facil:12,from:[4,9],gener:[5,12,17],gym:0,independ:12,inform:11,instal:9,instanc:[5,12],interfac:[10,11,13,14,15],introduct:8,issu:9,iter:14,khalil:13,list:[10,11,12,13,14],locat:12,markov:2,mdp:2,model:[2,15],multipl:[5,6],nnode:14,node:13,noth:[11,13],observ:[0,2,6,13],offset:0,openai:0,paramet:[0,3,5,17],partial:2,pass:3,pip:9,problem:[2,5],process:2,program:1,protocol:[10,12],pseudocost:13,pyscipopt:4,random:[5,16],reproduc:1,reset:[0,3,17],reward:[0,7,14],runtim:9,scip:[9,15],score:13,scratch:4,seed:[1,17],set:[0,12],solv:14,sourc:9,state:[0,5],step:3,strong:13,structur:[3,17],termin:0,theoret:2,time:14,transit:17,util:[14,16]}})