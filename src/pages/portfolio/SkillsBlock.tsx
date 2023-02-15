import { Typography } from '@/components/UIComponents'
import Arrow from '@/components/UIComponents/Arrow'
import * as styles from '@/styles/pages/SkillsBlock.styles'
import { SkillsImages } from '@/utils/portfolioTexts/skills.text'
import { rightArrowIcon } from '@/assets/icons'

const skillsTitle = '< Skills />'

const style = {
    color: 'white',
}

const SkillsBlock: React.FC = (): JSX.Element => {
    return (
        <>
            <styles.Container>
                <styles.AnimatedGradientText>
                    {skillsTitle}
                </styles.AnimatedGradientText>
                <styles.SkillsContainer>
                    <styles.Wrapper>
                        {SkillsImages.map((skills, index) => {
                            return (
                                <styles.Skills key={index}>
                                    {skills.image}
                                </styles.Skills>
                            )
                        })}
                    </styles.Wrapper>
                </styles.SkillsContainer>
            </styles.Container>
        </>
    )
}

export default SkillsBlock
