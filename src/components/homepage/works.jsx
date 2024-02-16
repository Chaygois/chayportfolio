import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://cdn.discordapp.com/attachments/1120323557491212288/1208022599846858812/Screenshot_2024-02-16_at_09-10-12_Solucoes_em_Blockchain_GoLedger._Gerenciando_de_APIs_com_protocolo_da_confianca._Gerenciando_de_APIs_em_blockchains_permissionados_para_rastreabilidade_gestao_de_documentos_ide....png?ex=65e1c5b7&is=65cf50b7&hm=c656ac4217f548e0274e8bec2fb07980b944dc1e9066a0df999cdb6e247aa107&"
								alt="qa"
								className="work-image"
							/>
							<div className="work-title">GoLedger</div>
							<div className="work-subtitle">
								QA
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
						<div className="work">
							<img
								src="https://cdn.discordapp.com/attachments/1120323557491212288/1208021297582448671/Screenshot_2024-02-16_at_09-00-23_1683034743302_imagem_JPEG_200_200_pixels.png?ex=65e1c481&is=65cf4f81&hm=3960e0429aa0d994b52cd191fa69c86a6b832c36f618ffd576f06a7a58e2a3a1&"
								alt="qa"
								className="work-image"
							/>
							<div className="work-title">Checkmate Property</div>
							<div className="work-subtitle">
								QA Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="https://scontent.ffor13-1.fna.fbcdn.net/v/t39.30808-6/362954584_678332664327976_6200431304471991411_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ThbaalXuIuoAX8TFOeW&_nc_ht=scontent.ffor13-1.fna&oh=00_AfDE_vrhUMEoJe3O0aPEb8VgDWjdMrU9DxanvQ9zYJZLkQ&oe=65D4D87B"
								alt="BNB"
								className="work-image"
							/>
							<div className="work-title">BANCO DO NORDESTE</div>
							<div className="work-subtitle">
								Front end Junior
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
